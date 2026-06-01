import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../db';
import { authRequired } from '../middlewares/auth';

const router = Router();

router.post('/:id/vote', authRequired, async (req, res) => {
  const schema = z.object({ value: z.union([z.literal(-1), z.literal(0), z.literal(1)]) });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  const commentId = String(req.params.id);

  const c = await prisma.comment.findFirst({ where: { id: commentId, deletedAt: null }, select: { id: true } });
  if (!c) return res.status(404).json({ message: 'Not found' });

  const value = parsed.data.value;
  if (value === 0) {
    await prisma.vote.deleteMany({ where: { userId: req.user!.id, commentId } });
  } else {
    await prisma.vote.upsert({
      where: { userId_commentId: { userId: req.user!.id, commentId } },
      update: { value },
      create: { userId: req.user!.id, commentId, value },
    });
  }
  res.json({ ok: true });
});

export const commentsRouter = router;

