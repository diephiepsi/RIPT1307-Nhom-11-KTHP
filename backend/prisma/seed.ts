import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const password = await bcrypt.hash("123456", 10);

  await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {
      password,
      role: "ADMIN",
      locked: false,
    },
    create: {
      email: "admin@gmail.com",
      fullName: "Admin",
      password,
      role: "ADMIN",
      locked: false,
    },
  });

  await prisma.user.upsert({
    where: { email: "student@gmail.com" },
    update: {
      password,
      role: "STUDENT",
      locked: false,
    },
    create: {
      email: "student@gmail.com",
      fullName: "Student",
      password,
      role: "STUDENT",
      locked: false,
    },
  });

  await prisma.user.upsert({
    where: { email: "teacher@gmail.com" },
    update: {
      password,
      role: "LECTURER",
      locked: false,
    },
    create: {
      email: "teacher@gmail.com",
      fullName: "Teacher",
      password,
      role: "LECTURER",
      locked: false,
    },
  });

  console.log("Seed tài khoản thành công!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
