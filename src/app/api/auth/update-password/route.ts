import db from "@/lib/database";
import { JwtPayload, verify } from "jsonwebtoken";
import bcrypt from 'bcrypt'

export async function PUT(req: Request) {
  const body = await req.json()
  const email: JwtPayload | string = verify(body.token, process.env.TOKEN_SECRET!)

  const updatePassword = await db.user.update({
    where: {
      email: email as string
    },
    data: {
      password: await bcrypt.hash(body.password, 10)
    }
  })

  return new Response(JSON.stringify({ message: 'password updated successfully' }))
}