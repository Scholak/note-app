import db from '@/lib/database'
import bcrypt from 'bcrypt'

interface RequestBody {
  name: string
  email: string
  password: string
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json()

  const existingUser = await db.user.findFirst({
    where: {
      email: body.email
    }
  })

  if(existingUser) {
    return new Response(JSON.stringify({ message: 'email already in use' }), { status: 400 })
  }

  const user = await db.user.create({
		data: {
			name: body.name,
			email: body.email,
			password: await bcrypt.hash(body.password, 10),
		},
	})

  const { password, ...result } = user

  return new Response(JSON.stringify(result))
}