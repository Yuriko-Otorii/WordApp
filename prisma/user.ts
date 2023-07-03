import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (username: string, email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password
    }
  })

  return user;
}

export const getAllUser = async () => {
  const allUsers = await prisma.user.findMany();

  return allUsers;
}