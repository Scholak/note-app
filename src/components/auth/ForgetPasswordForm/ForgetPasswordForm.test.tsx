import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, vi } from 'vitest'
import ForgetPasswordForm from './ForgetPasswordForm'
import { toast } from 'react-toastify'
import userEvent from '@testing-library/user-event'

describe('<ForgetPasswordForm /> component tests', () => {
  it('should render <ForgetPasswordForm /> component without crashing', () => {
    render(<ForgetPasswordForm />)

    const resetPasswordButton = screen.getByRole('button')

    expect(resetPasswordButton).toBeInTheDocument()
  })

  it('should display required error when form submitted with no values', async () => {
		render(<ForgetPasswordForm />)

		const resetPasswordButton = screen.getByRole('button')

		await userEvent.click(resetPasswordButton)

		const emailError = await screen.findByText('Email field is required')

		expect(emailError).toBeInTheDocument()
	})
  
  it('should display valid email error when email is invalid', async () => {
		render(<ForgetPasswordForm />)

    const emailInput = screen.getByLabelText('Email')
		const resetPasswordButton = screen.getByRole('button')

    await userEvent.type(emailInput, 'invalid@i')
		await userEvent.click(resetPasswordButton)

		const emailError = await screen.findByText('Email address must be valid')

		expect(emailError).toBeInTheDocument()
	})

  it('should resetpassword when form filled correctly', async () => {
		render(<ForgetPasswordForm />)

		const emailInput = screen.getByLabelText('Email')
		const resetPasswordButton = screen.getByRole('button')

		await userEvent.type(emailInput, 'valid@gmail.com')
		await userEvent.click(resetPasswordButton)

		expect(toast.success).toBeCalled()
	})
})