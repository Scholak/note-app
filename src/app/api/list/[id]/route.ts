import { authOptions } from "@/lib/authOptions";
import db from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

interface Params {
	params: {
		id: number
	}
} 

export async function DELETE(req: NextRequest, { params }: Params) {
	try {
		const session = await getServerSession(authOptions)

		await db.list.deleteMany({
			where: { id: Number(params.id), userId: session?.user.id },
		})

		return new Response(null, { status: 204 })
	} catch (error: any) {
		return new Response(JSON.stringify({ message: error }), { status: 422 })
	}
}