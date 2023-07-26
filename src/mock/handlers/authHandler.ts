import { rest } from 'msw'

export const authHandlers = [
  rest.post('/api/auth/register', async (req, res, ctx) => {
    res(ctx.status(200))
  }),

  rest.post('/api/auth/reset-password', (req, res, ctx) => {
    return res(ctx.json({ accepted: ['1'] }), ctx.status(200))
  }),
  
  rest.put('/api/auth/update-password', (req, res, ctx) => {
    return res(ctx.status(200))
  }),

  rest.delete('/api/auth/delete-account/:id', (req, res, ctx) => {
    if (Number(req.params.id) === 1) {
      return res(ctx.status(204))
    }
    return res(ctx.status(400))
  })
]