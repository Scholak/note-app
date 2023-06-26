import db from "@/lib/database";
import { JwtPayload, verify } from "jsonwebtoken";
import bcrypt from 'bcrypt'

export async function PUT(req: Request) {
  const body = await req.json()
  const email: JwtPayload | string = verify(body.token, process.env.TOKEN_SECRET!)

  try {
    await db.user.update({
      where: {
        email: email as string
      },
      data: {
        password: await bcrypt.hash(body.password, 10)
      }
    })

    return new Response(JSON.stringify({ message: 'password updated successfully' }))
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }))
  }
}