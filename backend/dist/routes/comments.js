"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const db_1 = require("../db");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/:id/vote', auth_1.authRequired, async (req, res) => {
    const schema = zod_1.z.object({ value: zod_1.z.union([zod_1.z.literal(-1), zod_1.z.literal(0), zod_1.z.literal(1)]) });
    const parsed = schema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json(parsed.error.flatten());
    const commentId = String(req.params.id);
    const c = await db_1.prisma.comment.findFirst({ where: { id: commentId, deletedAt: null }, select: { id: true } });
    if (!c)
        return res.status(404).json({ message: 'Not found' });
    const value = parsed.data.value;
    if (value === 0) {
        await db_1.prisma.vote.deleteMany({ where: { userId: req.user.id, commentId } });
    }
    else {
        await db_1.prisma.vote.upsert({
            where: { userId_commentId: { userId: req.user.id, commentId } },
            update: { value },
            create: { userId: req.user.id, commentId, value },
        });
    }
    res.json({ ok: true });
});
exports.commentsRouter = router;
