import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import NextAuth from "next-auth";

import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  async authorize(credentials: { email: string; password: string; }){
    if(!credentials.email || !credentials.password){
      return null
    }  
    const user = await prisma.user.findUnique({
      where: { email: credentials.email }
    })
    if(!user){
      return null
    }
    
    const isPasswordValid = await compare(credentials.password, user.password)
    if(!isPasswordValid){
      return null
    }
    
    return {user}
  },
  adapter: PrismaAdapter(prisma),
  debug: true,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };