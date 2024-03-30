import { PrismaClient } from "@prisma/client";

// this has to be done because of next hot reload declaring many instances of PrismaClient on development
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
