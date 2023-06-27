interface Todo {
  id: number
  name: string
  completed: boolean
  listId: number
}

interface CreateTodoSchema {
  name: string
}