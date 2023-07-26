import { rest } from 'msw'

export const todoHandlers = [
  rest.post('/api/todo', async (req, res, ctx) => {
    const body = await req.json()

    console.log(body)

    if(!(body.name || body.listId)) {
      return res(ctx.status(422))
    }

    return res(ctx.status(200))
  })
]