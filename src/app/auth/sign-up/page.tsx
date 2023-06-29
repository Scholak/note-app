import React from 'react'
import SignUpForm from '@/components/auth/SignUpForm'

export const metadata = {
	title: 'Sign Up'
}

const SignUp = () => {
  return (
		<div>
			<h1 className='text-4xl font-bold'>Sign Up</h1>
			<SignUpForm />
		</div>
	)
}

export default SignUp
