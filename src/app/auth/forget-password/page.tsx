import React from 'react'
import { ForgetPasswordForm } from '@/components/auth'

export const metadata = {
	title: 'Forget Password'
}

const ForgetPassword = () => {
  return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Forget Password</h1>
			<ForgetPasswordForm />
		</div>
	)
}

export default ForgetPassword
