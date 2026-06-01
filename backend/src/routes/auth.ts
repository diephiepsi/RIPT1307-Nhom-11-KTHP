import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../db';
import type { Role } from '@prisma/client';
import { authRequired } from '../middlewares/auth';

const router = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(2),
  role: z.enum(['STUDENT', 'LECTURER']),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

function signToken(payload: { id: string; role: Role; email: string }) {
  const secret = process.env.JWT_SECRET ?? '';
  return jwt.sign(payload, secret, { expiresIn: '7d' });
}

router.post('/register', async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const { email, password, fullName, role } = parsed.data;
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(409).json({ message: 'Email already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashed, fullName, role },
    select: { id: true, email: true, fullName: true, role: true, locked: true },
  });

  const token = signToken({ id: user.id, role: user.role, email: user.email });
  res.json({ token, user });
});

router.post('/login', async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  if (user.locked) return res.status(403).json({ message: 'Account is locked' });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  const token = signToken({ id: user.id, role: user.role, email: user.email });
  res.json({
    token,
    user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role, locked: user.locked },
  });
});

router.get('/me', authRequired, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { id: true, email: true, fullName: true, role: true, locked: true },
  });
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
});

export const authRouter = router;

