import React from 'react'
import { screen, render } from '@testing-library/react'
import { server } from '@/mock/server'
import { describe, vi } from 'vitest'
import SignInButton from './SignInButton'

describe('<SignInButton /> component tests', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should render <SignInButton /> without crashing', () => {
		render(<SignInButton />)

		const signOutBtn = screen.getByText('Sign Out')

		expect(signOutBtn).toBeInTheDocument()
	})
})