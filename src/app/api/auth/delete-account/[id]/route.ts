import db from "@/lib/database"

interface Params {
	params: {
		id: number
	}
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    const deleted = await db.user.delete({
			where: { id: Number(params.id) },
		})

    if(deleted) {
      return new Response(null, { status: 204 })
    } else {
      return new Response(JSON.stringify({ message: 'account could not deleted' }), { status: 400 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 422 })
  }
}