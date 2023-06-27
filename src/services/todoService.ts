import db from "@/lib/database"

export const getTodos = async (listId: number) => {
  try {
    const todos = await db.todo.findMany({
			where: { listId: Number(listId) },
		})

    return todos
  } catch (error: any) {
    throw new Error(error.message)
  }
}