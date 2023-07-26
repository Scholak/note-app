import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe } from 'vitest'
import SignInButton from './SignInButton'

describe('<SignInButton /> component tests', () => {
  it('should render <SignInButton /> without crashing', () => {
		render(<SignInButton />)

		const signOutBtn = screen.getByText('Sign Out')

		expect(signOutBtn).toBeInTheDocument()
	})
})