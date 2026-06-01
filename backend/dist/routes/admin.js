"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const zod_1 = require("zod");
const db_1 = require("../db");
const auth_1 = require("../middlewares/auth");
const requireRole_1 = require("../middlewares/requireRole");
const mail_1 = require("../services/mail");
const router = (0, express_1.Router)();
router.use(auth_1.authRequired, (0, requireRole_1.requireRole)(['ADMIN']));
router.get('/posts', async (_req, res) => {
    const posts = await db_1.prisma.question.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' },
        include: { author: true, votes: { select: { value: true } } },
    });
    res.json(posts.map((p) => ({
        id: p.id,
        title: p.title,
        createdAt: p.createdAt.toISOString(),
        authorName: p.author.fullName,
        score: p.votes.reduce((acc, v) => acc + (v.value > 0 ? 1 : v.value < 0 ? -1 : 0), 0),
    })));
});
router.delete('/posts/:id', async (req, res) => {
    const id = req.params.id;
    await db_1.prisma.question.update({ where: { id }, data: { deletedAt: new Date() } }).catch(() => null);
    res.json({ ok: true });
});
router.get('/users', async (_req, res) => {
    const users = await db_1.prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(users.map((u) => ({
        id: u.id,
        email: u.email,
        fullName: u.fullName,
        role: u.role,
        locked: u.locked,
        createdAt: u.createdAt.toISOString(),
    })));
});
const createUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    fullName: zod_1.z.string().min(2),
    password: zod_1.z.string().min(6),
    role: zod_1.z.enum(['STUDENT', 'LECTURER', 'ADMIN']),
});
router.post('/users', async (req, res) => {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json(parsed.error.flatten());
    const { email, fullName, password, role } = parsed.data;
    const exists = await db_1.prisma.user.findUnique({ where: { email } });
    if (exists)
        return res.status(409).json({ message: 'Email already exists' });
    const hashed = await bcryptjs_1.default.hash(password, 10);
    const u = await db_1.prisma.user.create({ data: { email, fullName, password: hashed, role } });
    res.status(201).json({ id: u.id });
});
router.patch('/users/:id', async (req, res) => {
    const schema = zod_1.z.object({ locked: zod_1.z.boolean().optional(), fullName: zod_1.z.string().min(2).optional() });
    const parsed = schema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json(parsed.error.flatten());
    const id = req.params.id;
    await db_1.prisma.user.update({ where: { id }, data: parsed.data }).catch(() => null);
    res.json({ ok: true });
});
router.post('/users/:id/reset-password', async (req, res) => {
    const id = req.params.id;
    const user = await db_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        return res.status(404).json({ message: 'Not found' });
    const newPass = Math.random().toString(36).slice(2, 10);
    const hashed = await bcryptjs_1.default.hash(newPass, 10);
    await db_1.prisma.user.update({ where: { id }, data: { password: hashed } });
    await (0, mail_1.sendMail)({
        to: user.email,
        subject: 'Cấp lại mật khẩu',
        html: `<p>Mật khẩu mới của bạn là: <b>${newPass}</b></p>`,
    });
    res.json({ ok: true });
});
exports.adminRouter = router;
