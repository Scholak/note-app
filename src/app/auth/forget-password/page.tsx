'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgetPasswordSchema } from '@/validation/auth'

const ForgetPassword = () => {
	const [error, setError] = useState<string>('')
	const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({resolver: zodResolver(forgetPasswordSchema)})
  
  const onSubmit = async (data: ForgetPasswordSchema) => {
    try {
			const res = await axios.post('/api/auth/reset-password', data)

			if(res.data.accepted.length === 1) {
				toast.success('Reset password link has been sent to your email!')
			}
		} catch (error: any) {
			setError(error.response.data.message)
		}
  }

  return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Forget Password</h1>
			{error && <span className='text-red-600'>{error}</span>}
			<form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='Email' className='block mb-1'>
						Email
					</label>
					<input
						type='email'
						className='w-full border border-slate-600 py-1 px-2 rounded-sm text-black'
						placeholder='enter your email address'
						{...register('email')}
					/>
					{errors.email && <span className='text-red-600'>{errors.email.message}</span>}
				</div>
				<div className='mt-5'>
					<button
						type='submit'
						className='w-full py-2 px-4 rounded-md text-white bg-blue-500'
					>
						reset password
					</button>
				</div>
			</form>
		</div>
	)
}

export default ForgetPassword
