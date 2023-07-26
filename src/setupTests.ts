import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

beforeAll(() => {
	vi.mock('next/navigation', () => require('next-router-mock'))

	vi.mock('react-toastify', () => ({
		toast: {
			success: vi.fn(),
			error: vi.fn(),
		},
	}))

	vi.mock('next-auth/react', () => ({
		useSession: vi.fn(() => {
			return {
				data: {
					user: {
						id: 1,
						name: 'test user',
						email: 'test.user@gmail.com',
					},
				},
				status: 'authenticated'
			}
		})
	}))
})

afterEach(() => {
	cleanup()
})
