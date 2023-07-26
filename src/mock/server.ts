import { setupServer } from 'msw/node'
import { todoHandlers } from './handlers/todoHandler'
import { listHandlers } from './handlers/listHandler'

export const server = setupServer(...todoHandlers, ...listHandlers)
