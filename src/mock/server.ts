import { setupServer } from 'msw/node'
import { todoHandlers } from './handlers/todoHandler'
import { listHandlers } from './handlers/listHandler'
import { authHandlers } from './handlers/authHandler'

export const server = setupServer(...todoHandlers, ...listHandlers, ...authHandlers)
