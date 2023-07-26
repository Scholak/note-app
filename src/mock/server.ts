import { setupServer } from 'msw/node'
import { todoHandlers } from './handlers/todoHandler'

export const server = setupServer(...todoHandlers)
