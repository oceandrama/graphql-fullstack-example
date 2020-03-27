import { PrismaClient, User } from "@prisma/client";
import cookie from "cookie";
import { ContextParameters } from "graphql-yoga/dist/types";
import { verify } from "jsonwebtoken";

const prisma = new PrismaClient();

export interface Context extends ContextParameters {
  prisma: PrismaClient;
  user: User | null;
}

interface Token {
  userId: number;
}

export function getUser(request: Context["request"]) {
  const token = cookie.parse(request.headers.cookie || "")["auth.token"];

  if (token) {
    const verifiedToken = verify(token, "supersecretkey") as Token;
    return prisma.user.findOne({ where: { id: verifiedToken.userId } });
  }

  return null;
}

export const createContext = async (
  params: ContextParameters
): Promise<Context> => ({
  ...params,
  prisma,
  user: await getUser(params.request)
});
