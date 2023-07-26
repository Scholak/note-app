import React from 'react'
import { screen, render } from '@testing-library/react'

import Loader from './Loader'
import { describe } from 'vitest'

describe('<Loader /> component tests', () => {

  it('should render <Loader /> component with default values', () => {
    render(<Loader />)

    const loader = screen.getByTestId('loader')

    expect(loader).toBeVisible()
    expect(loader).toHaveStyle({ width: '100% !important' })
    expect(loader).toHaveStyle({ height: 'auto' })
  })

  it('should render <Loader /> component with props', () => {
    render(<Loader width={100} height={100} className='test' />)

    const loader = screen.getByTestId('loader')

    expect(loader).toBeVisible()
		expect(loader).toHaveStyle({ width: '100px' })
		expect(loader).toHaveStyle({ height: '100px' })
		expect(loader).toHaveClass('test')
  })
})