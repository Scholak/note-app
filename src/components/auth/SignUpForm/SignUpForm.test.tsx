import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, vi } from 'vitest'
import SignUpForm from './SignUpForm'
import { toast } from 'react-toastify'
import userEvent from '@testing-library/user-event'

describe('<SignUpForm /> component tests', () => {
	it('should render <SignUpForm /> component without crashing', () => {
		render(<SignUpForm />)

		const signInButton = screen.getByRole('button')

		expect(signInButton).toBeInTheDocument()
	})

	it('should display required error when form submitted with no values', async () => {
		render(<SignUpForm />)

		const signInButton = screen.getByRole('button')

		await userEvent.click(signInButton)

		const nameError = await screen.findByText('Name field is required')
		const emailError = await screen.findByText('Email field is required')
		const passwordError = await screen.findByText('Password field is required')
		const passwordConfirmationError = await screen.findByText('Password Confirmation field is required')

		expect(nameError).toBeInTheDocument()
		expect(emailError).toBeInTheDocument()
		expect(passwordError).toBeInTheDocument()
		expect(passwordConfirmationError).toBeInTheDocument()
	})

	it('should display min error for name, valid for email, min for password, same for password confirmation errors', async () => {
		render(<SignUpForm />)

		const nameInput = screen.getByLabelText('Name')
		const emailInput = screen.getByLabelText('Email')
		const passwordInput = screen.getByLabelText('Password')
		const passwordConfirmationInput = screen.getByLabelText('Password Confirmation')
		const signInButton = screen.getByRole('button')

		await userEvent.type(nameInput, 't')
		await userEvent.type(emailInput, 'invalid@i')
		await userEvent.type(passwordInput, '12345')
		await userEvent.type(passwordConfirmationInput, '123')
		await userEvent.click(signInButton)

		const nameMinError = await screen.findByText('Name field must be at least 2 characters')
		const emailError = await screen.findByText('Email address must be valid')
		const passwordError = await screen.findByText('Password field must be at least 6 characters')
		const passwordConfirmationError = await screen.findByText('Passwords are not matching')

    expect(nameMinError).toBeInTheDocument()

    await userEvent.type(nameInput, 'more than 15 characters')
    await userEvent.click(signInButton)

    const nameMaxError = await screen.findByText('Name field must be at most 15 characters')

		expect(nameMaxError).toBeInTheDocument()
		expect(emailError).toBeInTheDocument()
		expect(passwordError).toBeInTheDocument()
		expect(passwordConfirmationError).toBeInTheDocument()
	})

	it('should register when form filled correctly', async () => {
		render(<SignUpForm />)

		const nameInput = screen.getByLabelText('Name')
		const emailInput = screen.getByLabelText('Email')
		const passwordInput = screen.getByLabelText('Password')
		const passwordConfirmationInput = screen.getByLabelText('Password Confirmation')
		const signInButton = screen.getByRole('button')

		await userEvent.type(nameInput, 'name')
		await userEvent.type(emailInput, 'valid@gmail.com')
		await userEvent.type(passwordInput, '123456')
		await userEvent.type(passwordConfirmationInput, '123456')
		await userEvent.click(signInButton)

		// expect(toast.success).toBeCalled()
	})
})
