import { transport } from '@/lib/mail'
import { sign } from 'jsonwebtoken'

export async function POST(req: Request) {
  const { email } = await req.json()

  const token = sign(email, process.env.TOKEN_SECRET!)

  const result = await transport.sendMail({
		from: '"Next App" <nextjs@gmail.com>', // sender address
		to: email, // list of receivers
		subject: 'Password Reset', // Subject line
		html: `<a href='http://localhost:3000/auth/change-password?token=${token}'>reset your password</a>`, // html body
	})

  console.log(result)

  return new Response(JSON.stringify(result))
}