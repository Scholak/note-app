import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

afterEach(() => {
	cleanup()
	vi.mock('next/navigation', () => require('next-router-mock'))

	vi.mock('react-toastify', () => ({
		toast: {
			success: vi.fn(),
			error: vi.fn(),
		},
	}))
})
