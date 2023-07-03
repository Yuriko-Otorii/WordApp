import { NextResponse } from "next/server";

import { createUser, getAllUser } from "../../../../prisma/user";


export async function GET() {
  console.log("GET");
  const allUsers = await getAllUser()

  return NextResponse.json(allUsers)
}


export async function POST(req: Request) {  
  const { email, username, confirmPassword } = await req.json();
  const newUser = await createUser(email, username, confirmPassword)  

  return NextResponse.json(newUser)
}


