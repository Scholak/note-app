import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe } from 'vitest'
import Navbar from './Navbar'
import SignInButton from '../SignInButton'

describe('<Navbar /> component tests', () => {
  const MockSignInButton = () => <button>sign in</button>

  it('should render <Navbar /> component without crashing', () => {
    render(<Navbar SignInBtn={MockSignInButton} />)

    const homeLink = screen.getByText('Home')

    expect(homeLink).toBeInTheDocument()
  })

  it('should toggle <Navbar /> component when burger menu clicked', async () => {
		render(<Navbar SignInBtn={MockSignInButton} />)

    const burgerIcon = screen.getByTestId('burger-icon')

    await userEvent.click(burgerIcon)

    const navbar = await screen.findByRole('navigation')

    expect(navbar).not.toHaveClass('-translate-x-full')
  })

  it('burger icon should be invisible on desktop', async () => {
    render(<Navbar SignInBtn={MockSignInButton} />)
    
    const burgerIcon = screen.getByTestId('burger-icon')

    expect(burgerIcon).toHaveClass('md:hidden')
  })
})