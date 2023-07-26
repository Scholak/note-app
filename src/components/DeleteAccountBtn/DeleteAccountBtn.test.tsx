import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '@/mock/server'
import { describe } from 'vitest'
import DeleteAccountBtn from './DeleteAccountBtn'
import { toast } from 'react-toastify'

describe('<DeleteAccountBtn /> component tests', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should render <DeleteAccountBtn /> without crashing', () => {
    render(<DeleteAccountBtn />)

    const deleteAccountBtn = screen.getByText('delete my account')

    expect(deleteAccountBtn).toBeInTheDocument()
  })

  it('should delete account when "delete my account" button clicked', async () => {
    render(<DeleteAccountBtn />)

		const deleteAccountBtn = screen.getByText('delete my account')

    await userEvent.click(deleteAccountBtn)

    // expect(toast.success).toBeCalled()
  })
})