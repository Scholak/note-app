import { rest } from 'msw'
import { mockList } from '../data/lists'

export const listHandlers = [
  rest.delete('/api/list/:id', (req, res, ctx) => {
    if(mockList.id === Number(req.params.id)) {
      return res(ctx.status(204))
    }
    return res(ctx.json({ message: 'list could not deleted' }), ctx.status(422))
  })
]