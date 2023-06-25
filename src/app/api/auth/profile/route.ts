import { getToken } from "next-auth/jwt"
import { NextApiRequest } from "next"

export async function GET(req: NextApiRequest) {
  const token = await getToken({ req })

  return new Response(JSON.stringify({ token }))
}