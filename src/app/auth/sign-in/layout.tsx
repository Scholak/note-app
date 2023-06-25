import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Sign In',
}

const Layout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>
}

export default Layout
