import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '@/mock/server'
import { describe } from 'vitest'
import DeleteListBtn from './DeleteListBtn'
import { toast } from 'react-toastify'

describe('<DeleteListBtn /> component tests', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should render <DeleteListBtn /> component without crashing', () => {
    render(<DeleteListBtn id={1} />)

    const deleteBtn = screen.getByText('delete list')

    expect(deleteBtn).toBeInTheDocument()
  })

  it('should delete list when delete list button clicked', async () => {
    render(<DeleteListBtn id={1} />)

    const deleteBtn = screen.getByText('delete list')

    await userEvent.click(deleteBtn)

    expect(toast.success).toBeCalled()
  })

  it('should delete list when delete list button clicked', async () => {
		render(<DeleteListBtn id={2} />)

		const deleteBtn = screen.getByText('delete list')

		await userEvent.click(deleteBtn)

		expect(toast.error).toBeCalled()
	})
})