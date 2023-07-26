import { rest } from 'msw'
import { mockTodo } from '../data/todos'

export const todoHandlers = [
  rest.post('/api/todo', async (req, res, ctx) => {
    const body = await req.json()

    if(!(body.name || body.listId)) {
      return res(ctx.status(422))
    }

    return res(ctx.status(200))
  }),

  rest.put('/api/todo/:id', async (req, res, ctx) => {
    if (mockTodo.id === Number(req.params.id)) {
      return res(ctx.status(202))
    }
    return res(ctx.status(400))
  }),

  rest.delete('/api/todo/:id', async (req, res, ctx) => {
    if (mockTodo.id === Number(req.params.id)) {
			return res(ctx.status(204))
		}
		return res(ctx.status(400))
  })
]