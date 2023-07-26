import { rest } from 'msw'

export const authHandlers = [
  rest.delete('/api/auth/delete-account/:id', (req, res, ctx) => {
    if (Number(req.params.id) === 1) {
      return res(ctx.status(204))
    }
    return res(ctx.status(400))
  })
]