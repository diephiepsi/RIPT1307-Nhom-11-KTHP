import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

function getDbAdapter() {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error('Missing DATABASE_URL');
  const u = new URL(raw);
  const database = u.pathname.replace(/^\//, '');
  return new PrismaMariaDb({
    host: u.hostname,
    port: Number(u.port || '3306'),
    user: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database,
    connectionLimit: 10,
  });
}

export const prisma = new PrismaClient({
  adapter: getDbAdapter(),
});

