import { PrismaClient, User } from "@prisma/client";
import cookie from "cookie";
import type { Request, Response } from "express";
import { verify } from "jsonwebtoken";

const prisma = new PrismaClient();

interface ExpressContext {
  req: Request;
  res: Response;
}

export interface Context extends ExpressContext {
  prisma: PrismaClient;
  user: User | null;
}

interface Token {
  userId: number;
}

export function getUser(request: Request) {
  const token = cookie.parse(request.headers.cookie || "")["auth.token"];

  if (token) {
    const verifiedToken = verify(token, "supersecretkey") as Token;
    return prisma.user.findOne({ where: { id: verifiedToken.userId } });
  }

  return null;
}

export const createContext = async (ctx: ExpressContext): Promise<Context> => ({
  ...ctx,
  prisma,
  user: await getUser(ctx.req),
});
