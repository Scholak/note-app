import { SignInForm } from '@/components/auth'
import React from 'react'

export const metadata = {
	title: 'Sign In'
}

const SignIn = () => {
  return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Sign In</h1>
			<SignInForm />
		</div>
	)
}

export default SignIn
