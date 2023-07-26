import React from 'react'
import { ChangePasswordForm } from '@/components/auth'

export const metadata = {
	title: 'Change Password'
}

const ChangePassword = () => {
	return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Change Password</h1>
			<ChangePasswordForm />			
		</div>
	)
}

export default ChangePassword
