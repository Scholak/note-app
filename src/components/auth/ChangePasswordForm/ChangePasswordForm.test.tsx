import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, vi } from 'vitest'
import ChangePasswordForm from './ChangePasswordForm'
import { toast } from 'react-toastify'
import userEvent from '@testing-library/user-event'

describe('<ChangePasswordForm /> component tests', () => {
  it('should render <ChangePasswordForm /> component without crashing', () => {
    render(<ChangePasswordForm />)

    const confirmPasswordButton = screen.getByRole('button')

    expect(confirmPasswordButton).toBeInTheDocument()
  })

  it('should display required errors when form submitted with no values', async () => {
    render(<ChangePasswordForm />)

		const confirmPasswordButton = screen.getByRole('button')

		await userEvent.click(confirmPasswordButton)

    const passwordError = await screen.findByText('Password field is required')
    const passwordConfirmError = await screen.findByText('Password Confirmation field is required')

    expect(passwordError).toBeInTheDocument()
    expect(passwordConfirmError).toBeInTheDocument()
  })

  it('should display "same" error when passwords are not matching', async () => {
    render(<ChangePasswordForm />)

		const passwordInput = screen.getByLabelText('Enter Your New Password')
		const passwordConfirmInput = screen.getByLabelText('Confirm Your Password')
		const confirmPasswordButton = screen.getByRole('button')

    await userEvent.type(passwordInput, 'new password')
    await userEvent.type(passwordConfirmInput, 'new')
		await userEvent.click(confirmPasswordButton)

    const passwordConfirmError = await screen.findByText('Passwords are not matching')

    expect(passwordConfirmError).toBeInTheDocument()
  })

  it('should resetpassword when form filled correctly', async () => {
		render(<ChangePasswordForm />)

    const passwordInput = screen.getByLabelText('Enter Your New Password')
    const passwordConfirmInput = screen.getByLabelText('Confirm Your Password')
		const confirmPasswordButton = screen.getByRole('button')

    await userEvent.type(passwordInput, 'new password')
    await userEvent.type(passwordConfirmInput, 'new password')
    await userEvent.click(confirmPasswordButton)

    // expect(toast.success).toBeCalled()
	})
})