import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Sign In',
}

const layout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>
}

export default layout
