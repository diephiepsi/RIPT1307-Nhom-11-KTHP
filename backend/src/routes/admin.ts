import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '../db';
import { authRequired } from '../middlewares/auth';
import { requireRole } from '../middlewares/requireRole';
import { sendMail } from '../services/mail';

const router = Router();

router.use(authRequired, requireRole(['ADMIN']));

router.get('/posts', async (_req, res) => {
  const posts = await prisma.question.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: 'desc' },
    include: { author: true, votes: { select: { value: true } } },
  });

  res.json(
    posts.map((p) => ({
      id: p.id,
      title: p.title,
      createdAt: p.createdAt.toISOString(),
      authorName: p.author.fullName,
      score: p.votes.reduce((acc: number, v: { value: number }) => acc + (v.value > 0 ? 1 : v.value < 0 ? -1 : 0), 0),
    })),
  );
});

router.delete('/posts/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.question.update({ where: { id }, data: { deletedAt: new Date() } }).catch(() => null);
  res.json({ ok: true });
});

router.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(
    users.map((u) => ({
      id: u.id,
      email: u.email,
      fullName: u.fullName,
      role: u.role,
      locked: u.locked,
      createdAt: u.createdAt.toISOString(),
    })),
  );
});

const createUserSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2),
  password: z.string().min(6),
  role: z.enum(['STUDENT', 'LECTURER', 'ADMIN']),
});

router.post('/users', async (req, res) => {
  const parsed = createUserSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  const { email, fullName, password, role } = parsed.data;
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(409).json({ message: 'Email already exists' });
  const hashed = await bcrypt.hash(password, 10);
  const u = await prisma.user.create({ data: { email, fullName, password: hashed, role } });
  res.status(201).json({ id: u.id });
});

router.patch('/users/:id', async (req, res) => {
  const schema = z.object({ locked: z.boolean().optional(), fullName: z.string().min(2).optional() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  const id = req.params.id;
  await prisma.user.update({ where: { id }, data: parsed.data }).catch(() => null);
  res.json({ ok: true });
});

router.post('/users/:id/reset-password', async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return res.status(404).json({ message: 'Not found' });

  const newPass = Math.random().toString(36).slice(2, 10);
  const hashed = await bcrypt.hash(newPass, 10);
  await prisma.user.update({ where: { id }, data: { password: hashed } });

  await sendMail({
    to: user.email,
    subject: 'Cấp lại mật khẩu',
    html: `<p>Mật khẩu mới của bạn là: <b>${newPass}</b></p>`,
  });

  res.json({ ok: true });
});

export const adminRouter = router;

