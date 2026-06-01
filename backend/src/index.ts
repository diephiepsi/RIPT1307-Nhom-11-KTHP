import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import './types';
import { authRouter } from './routes/auth';
import { tagsRouter } from './routes/tags';
import { questionsRouter } from './routes/questions';
import { commentsRouter } from './routes/comments';
import { adminRouter } from './routes/admin';

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth', authRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/admin', adminRouter);

const port = Number(process.env.PORT ?? '4000');
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

