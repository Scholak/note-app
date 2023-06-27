import db from "@/lib/database"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const created = await db.todo.create({
      data: body
		})

    if(created) {
      return new Response(JSON.stringify({ todo: created }), { status: 200 })
    } else {
      return new Response(JSON.stringify({ message: 'todo could not created' }), { status: 400 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 422 })
  }
}