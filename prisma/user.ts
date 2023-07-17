import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (email: string, username: string, password: string) => {  
  const hashedPassword = await hash(password, 12)
  console.log(hashedPassword);
  
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    }
  })

  return user;
}

export const getAllUser = async () => {
  const allUsers = await prisma.user.findMany();

  return allUsers;
}

export const deleteUser = async (id: string) => {
  await prisma.user.delete({where: {id}})
  console.log("DELETE done");
}
// export const deleteUser = async (email: string) => {
//   await prisma.user.delete({where: {email: email}})
//   console.log("DELETE done");
// }