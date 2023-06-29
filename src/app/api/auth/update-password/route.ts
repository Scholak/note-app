import db from "@/lib/database";
import { JwtPayload, verify } from "jsonwebtoken";
import bcrypt from 'bcrypt'

export async function PUT(req: Request) {
  const body = await req.json()
  
  try {
    verify(body.token,process.env.TOKEN_SECRET!)
  } catch (error: any) {
    return new Response(JSON.stringify({ message: 'invalid token' }), { status: 422 })
  }

  try {
    const email: JwtPayload | string = verify(
			body.token,
			process.env.TOKEN_SECRET!
		)

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