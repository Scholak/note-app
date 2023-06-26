import { authOptions } from "@/lib/authOptions";
import db from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const body = await req.json()

    const created = await db.list.create({
			data: {
				name: body.name,
				description: body.description,
				userId: Number(session?.user.id),
			},
		})

    if(created) {
      return new Response(JSON.stringify({ list: created }), { status: 201 })
    } else {
      return new Response(JSON.stringify({ message: 'list could not created' }), { status: 400 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error }), { status:422 })
  }
}