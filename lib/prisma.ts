import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const isProduction = process.env.NODE_ENV === "production";

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Opcional: Log de queries para depuração
  });

if (isProduction) globalForPrisma.prisma = prisma;
