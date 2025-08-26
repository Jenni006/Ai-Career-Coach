import { PrismaClient } from "@/lib/generated/prisma";

// Store Prisma client globally to avoid hot-reload issues in dev
const globalForPrisma = globalThis;

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // optional: logs for debugging
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
