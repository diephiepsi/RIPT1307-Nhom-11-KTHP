"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
function getDbAdapter() {
    const raw = process.env.DATABASE_URL;
    if (!raw)
        throw new Error('Missing DATABASE_URL');
    const u = new URL(raw);
    const database = u.pathname.replace(/^\//, '');
    return new adapter_mariadb_1.PrismaMariaDb({
        host: u.hostname,
        port: Number(u.port || '3306'),
        user: decodeURIComponent(u.username),
        password: decodeURIComponent(u.password),
        database,
        connectionLimit: 10,
    });
}
exports.prisma = new client_1.PrismaClient({
    adapter: getDbAdapter(),
});
