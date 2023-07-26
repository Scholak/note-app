import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, vi } from 'vitest'
import SignInForm from './SignInForm'
import { toast } from 'react-toastify'
import userEvent from '@testing-library/user-event'
import { signIn } from 'next-auth/react'

describe('<SignInForm /> component tests', () => {
	it('should render <SignInForm /> component without crashing', () => {
		render(<SignInForm />)

		const signInButton = screen.getByRole('button')

		expect(signInButton).toBeInTheDocument()
	})

	it('should display required error when form submitted with no values', async () => {
		render(<SignInForm />)

		const signInButton = screen.getByRole('button')

		await userEvent.click(signInButton)

		const emailError = await screen.findByText('Email field is required')
		const passwordError = await screen.findByText('Password field is required')

		expect(emailError).toBeInTheDocument()
		expect(passwordError).toBeInTheDocument()
	})

	it('should display valid email error when email is invalid and min error when password is less than 6 characters', async () => {
		render(<SignInForm />)

		const emailInput = screen.getByLabelText('Email')
		const passwordInput = screen.getByLabelText('Password')
		const signInButton = screen.getByRole('button')

		await userEvent.type(emailInput, 'invalid@i')
		await userEvent.type(passwordInput, '12345')
		await userEvent.click(signInButton)

		const emailError = await screen.findByText('Email address must be valid')
		const passwordError = await screen.findByText('Password field must be at least 6 characters')

		expect(emailError).toBeInTheDocument()
		expect(passwordError).toBeInTheDocument()
	})

	it('should resetpassword when form filled correctly', async () => {
		render(<SignInForm />)

		const emailInput = screen.getByLabelText('Email')
		const passwordInput = screen.getByLabelText('Password')
		const signInButton = screen.getByRole('button')

		await userEvent.type(emailInput, 'valid@gmail.com')
		await userEvent.type(passwordInput, '123456')
		await userEvent.click(signInButton)

    expect(signIn).toBeCalled()
	})
})
