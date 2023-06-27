import db from "@/lib/database"

interface Params {
	params: {
		id: number
	}
}

export async function PUT(req: Request, { params }: Params ) {
  try {
    const body = await req.json()

    const toggleCompleted = await db.todo.update({
			where: { id: Number(params.id) },
      data: { completed: body.completed }
		})

    if(toggleCompleted) {
      return new Response(JSON.stringify({ todo: toggleCompleted }), { status: 202 })
    } else {
      return new Response(JSON.stringify({ message: 'todo could not updated' }), { status: 400 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 422 })
  }
}

export async function DELETE(req: Request,  { params }: Params ) {
  try {
    const deleted = await db.todo.delete({
			where: { id: Number(params.id) },
		})

    if(deleted) {
      return new Response(null, { status: 204 })
    } else {
      return new Response(JSON.stringify({ message: 'todo could not deleted' }), { status: 400 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 422 })
  }
}