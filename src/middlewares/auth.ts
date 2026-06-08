import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtUser } from "../types";
import { prisma } from "../db";

export async function authOptional(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const h = req.headers.authorization;

  if (!h?.startsWith("Bearer ")) {
    return next();
  }

  const token = h.slice("Bearer ".length);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET ?? "") as JwtUser;

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        locked: true,
      },
    });

    if (user && !user.locked) {
      req.user = {
        id: user.id,
        email: user.email,
        role: user.role,
      } as JwtUser;
    }
  } catch {
    // Token sai thì bỏ qua, coi như chưa đăng nhập
  }

  return next();
}

export async function authRequired(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const h = req.headers.authorization;

  if (!h?.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Vui lòng đăng nhập",
    });
  }

  const token = h.slice("Bearer ".length);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET ?? "") as JwtUser;

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        locked: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại",
      });
    }

    if (user.locked) {
      return res.status(403).json({
        message: "Tài khoản của bạn đã bị khóa",
      });
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    } as JwtUser;

    return next();
  } catch {
    return res.status(401).json({
      message: "Token không hợp lệ, vui lòng đăng nhập lại",
    });
  }
}
