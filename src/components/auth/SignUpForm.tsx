'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validation/auth'

const SignUpForm = () => {
  const router = useRouter()

	const [responseError, setResponseError] = useState<string>('')
	const [message, setMessage] = useState<string>('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) })

	const onSubmit = async (data: RegisterSchema) => {
		try {
			const res = await axios.post('/api/auth/register', data)

			if (res.status === 200) {
				toast.success('Signed up successfully!')
				router.push('/auth/sign-in')
			} else {
				setMessage('something went wrong')
			}
		} catch (error: any) {
			setResponseError(error.response.data.message)
		}
	}

  return (
		<>
			{responseError && (
				<span className='block mb-3 text-red-600 font-medium text-xl capitalize'>
					{responseError}
				</span>
			)}
			{message && (
				<span className='block mb-3 text-yellow-600 font-medium text-xl capitalize'>
					{message}
				</span>
			)}
			<form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='name' className='block mb-1 w-full'>
						Name
					</label>
					<input
						type='text'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						{...register('name')}
					/>
					{errors.name && (
						<span className='text-red-600'>{errors.name.message}</span>
					)}
				</div>
				<div className='my-3'>
					<label htmlFor='email' className='block mb-1 w-full'>
						Email
					</label>
					<input
						type='email'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						{...register('email')}
					/>
					{errors.email && (
						<span className='text-red-600'>{errors.email.message}</span>
					)}
				</div>
				<div className='my-3'>
					<label htmlFor='password' className='block mb-1 w-full'>
						Password
					</label>
					<input
						type='password'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						{...register('password')}
					/>
					{errors.password && (
						<span className='text-red-600'>{errors.password.message}</span>
					)}
				</div>
				<div className='my-3'>
					<label htmlFor='password' className='block mb-1 w-full'>
						Password Confirmation
					</label>
					<input
						type='password'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						{...register('passwordConfirmation')}
					/>
					{errors.passwordConfirmation && (
						<span className='text-red-600'>
							{errors.passwordConfirmation.message}
						</span>
					)}
				</div>
				<div className='mt-5 w-full'>
					<button
						type='submit'
						className='w-full py-2 rounded-md text-white bg-blue-500'
					>
						sign up
					</button>
				</div>
			</form>
		</>
	)
}

export default SignUpForm
