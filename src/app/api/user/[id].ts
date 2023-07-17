import { NextResponse } from "next/server";
import { deleteUser } from "../../../../prisma/user";
import { signupData } from "@/app/types/auth.type";


export async function DELETE(req: Request) {  
  console.log("DELETE");
  const { id } = await req.json()

  console.log(id);
}