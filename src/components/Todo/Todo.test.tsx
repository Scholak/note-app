import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockTodo } from '@/mock/data/todos'
import Todo from './Todo'
import { describe } from 'vitest'
import { server } from '@/mock/server'
import { toast } from 'react-toastify'

describe('<Todo /> component tests', () => {
  it('should render todo without crashing', () => {
    render(<Todo todo={mockTodo} />)

    const todoElement = screen.getByText('test todo single')

    expect(todoElement).toBeInTheDocument()
  })

  describe('update tests', () => {
    it('should update todo when clicked on it', async () => {
			render(<Todo todo={mockTodo} />)

			const todoElement = screen.getByText('test todo single')

			await userEvent.click(todoElement)

			expect(toast.success).toBeCalled()
		})

		it('should not update todo when id not exists', async () => {
			render(<Todo todo={mockTodo} />)

			const todoElement = screen.getByText('test todo single')

			await userEvent.click(todoElement)

			expect(toast.error).toBeCalled()
		})
  })

  describe('delete tests', () => {
    it('should delete todo when "x" icon clicked on it', async () => {
			render(<Todo todo={mockTodo} />)

			const deleteTodoBtn = screen.getByTestId('delete-todo')

			await userEvent.click(deleteTodoBtn)

			expect(toast.success).toBeCalled()
		})

		it('should not delete todo when id not exists', async () => {
			render(<Todo todo={mockTodo} />)

			const deleteTodoBtn = screen.getByTestId('delete-todo')

			await userEvent.click(deleteTodoBtn)

			expect(toast.error).toBeCalled()
		})
  })
})
