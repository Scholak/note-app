import db from "@/lib/database";
import { NextRequest } from "next/server";

interface Params {
	params: {
		id: number
	}
} 

export async function PUT(req: NextRequest, { params }: Params) {
  try {
		const body = await req.json()

		const updated = await db.list.update({
      where: { id: params.id },
			data: {
				name: body.name,
				description: body.description,
			},
		})

		if (updated) {
			return new Response(JSON.stringify({ list: updated }), { status: 202 })
		} else {
			return new Response(JSON.stringify({ message: 'list could not updated' }), { status: 400 })
		}
	} catch (error: any) {
		return new Response(JSON.stringify({ message: error }), { status: 422 })
	}
}

export async function DELETE(req: NextRequest, { params }: Params) {
	try {
		const deleted = await db.list.delete({
			where: { id: params.id },
		})

		if (deleted) {
			return new Response(JSON.stringify({}), { status: 204 })
		} else {
			return new Response(JSON.stringify({ message: 'list could not deleted' }), { status: 400 })
		}
	} catch (error: any) {
		return new Response(JSON.stringify({ message: error }), { status: 422 })
	}
}