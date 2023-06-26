import db from '@/lib/database'
import { transport } from '@/lib/mail'
import { sign } from 'jsonwebtoken'

export async function POST(req: Request) {
  const body = await req.json()
  
  if(!body.email) {
    return new Response(JSON.stringify({ message: 'Email required' }), { status: 400 })
  }

  const user = await db.user.findFirst({
    where: { email: body.email }
  })

  if(!user) {
    return new Response(JSON.stringify({ message: 'Email not found' }), { status: 400 })
  }
  
  const token = sign(body.email, process.env.TOKEN_SECRET!)
  
  try {
    const result = await transport.sendMail({
      from: '"Next App" <nextjs@gmail.com>', // sender address
      to: body.email, // list of receivers
      subject: 'Password Reset', // Subject line
      html: `<a href='${process.env.APP_URL}/auth/change-password?token=${token}'>reset your password</a>`, // html body
    })
    
    return new Response(JSON.stringify(result))
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 400 })
  }
}