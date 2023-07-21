import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from './page'

it('first test', () => {
  render(<HomePage />)
  const heading = screen.getByText(/Note App Using Next.js/i)

  expect(heading).toBeInTheDocument()
})