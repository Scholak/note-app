import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Forget Password',
}

const layout = ({ children }: { children: ReactNode }) => {
	return <>{children}</>
}

export default layout
