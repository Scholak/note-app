import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, vi } from 'vitest'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'

describe('<AddTodo /> component tests', () => {
  it('should render <AddTodo /> invisible initially', () => {
    render(<AddTodo listId={1} />)

    const createTodoForm = screen.getByTestId('form-div')

    expect(createTodoForm).toBeInTheDocument()
    expect(createTodoForm).toHaveClass('opacity-0', 'pointer-events-none')
  })

  it('should make <AddTodo /> visible when "+" icon clicked', async () => {
    render(<AddTodo listId={1} />)

    const plusIcon = screen.getByTestId('add-todo-btn')

    await userEvent.click(plusIcon)

    const createTodoForm = await screen.findByTestId('form-div')

    expect(createTodoForm).not.toHaveClass('opacity-0', 'pointer-events-none')
  })

  it('should display validation errors when submit button clicked', async () => {
    render(<AddTodo listId={1} />)

    const plusIcon = screen.getByTestId('add-todo-btn')
    const createTodoButton = screen.getByTestId('create-todo-btn')

    await userEvent.click(plusIcon)
    await userEvent.click(createTodoButton)

    const requiredError = await screen.findByText('Name field is required')

    expect(requiredError).toBeInTheDocument()
  })

  it('should create todo when form is filled correctly', async () => {
    render(<AddTodo listId={1} />)

		const plusIcon = screen.getByTestId('add-todo-btn')
    const nameField = screen.getByLabelText('Name')
		const createTodoButton = screen.getByTestId('create-todo-btn')

		await userEvent.click(plusIcon)
    await userEvent.type(nameField, 'test todo')
		await userEvent.click(createTodoButton)

    expect(toast.success).toBeCalled()
  })
})