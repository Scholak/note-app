import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe } from 'vitest'
import CreateList from './CreateList'
import { toast } from 'react-toastify'

describe('<CreateList /> component tests', () => {
  it('should render <CreateList /> component without crashing', () => {
    render(<CreateList />)
  
    const createButton = screen.getByRole('button')

    expect(createButton).toBeInTheDocument()
  })

  it('should display required error when form submitted with no values', async () => {
    render(<CreateList />)

		const createButton = screen.getByRole('button')

    await userEvent.click(createButton)

    const nameError = await screen.findByText('Name field is required')

    expect(nameError).toBeInTheDocument()
  })

  it('should display minimum character error when form submitted', async () => {
		render(<CreateList />)

    const nameInput = screen.getByLabelText('Name')
		const createButton = screen.getByRole('button')

    await userEvent.type(nameInput, 's')
		await userEvent.click(createButton)

		const nameError = await screen.findByText('Name field must be at least 2 characters')

		expect(nameError).toBeInTheDocument()
	})

  it('should return successful when form submitted correctly', async () => {
		render(<CreateList />)

		const nameInput = screen.getByLabelText('Name')
		const createButton = screen.getByRole('button')

		await userEvent.type(nameInput, 'valid')
		await userEvent.click(createButton)

    expect(toast.success).toBeCalled()
  })
})