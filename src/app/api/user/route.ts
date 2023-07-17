import { NextResponse } from "next/server";

import { createUser, deleteUser, getAllUser } from "../../../../prisma/user";


export async function GET() {
  console.log("GET");
  const allUsers = await getAllUser()
  console.log(allUsers);

  return NextResponse.json(allUsers)
}


export async function POST(req: Request) {  
  console.log("POST");
  const { email, username, confirmPassword: password } = await req.json();
  
  const newUser = await createUser(email, username, password)  

  return NextResponse.json(newUser)
}

export async function DELETE(req: Request) {  
  console.log("DELETE");
  const { id } = await req.json()  
  
  await deleteUser(id)

  return NextResponse.json({})
}



