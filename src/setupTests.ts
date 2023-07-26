import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { server } from './mock/server'

expect.extend(matchers)

beforeAll(() => {
	server.listen()

	vi.mock('next/navigation', () => ({
		useRouter: vi.fn(() => {
			return {
				push: vi.fn(),
			}
		}),
		useSearchParams: vi.fn(() => {
			return {
				get: vi.fn((param: string) => {
					return 'test-token'
				}),
			}
		}),
	}))

	vi.mock('react-toastify', () => ({
		toast: {
			success: vi.fn(),
			warning: vi.fn(),
			error: vi.fn(),
		},
	}))

	vi.mock('next-auth/react', () => ({
		signIn: vi.fn(),
		useSession: vi.fn(() => {
			return {
				data: {
					user: {
						id: 1,
						name: 'test user',
						email: 'test.user@gmail.com',
					},
				},
				status: 'authenticated',
			}
		}),
	}))
})

afterEach(() => {
	cleanup()
	server.resetHandlers()
})

afterAll(() => server.close())
