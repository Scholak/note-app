'use client'

import { signIn } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/validation/auth'
import Link from 'next/link'

const SignIn = () => {
	const searchParams = useSearchParams()

  const [loginRrror, setLoginError] = useState<string | null>('')

	const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({resolver: zodResolver(loginSchema)})

  const onSubmit = async (data: LoginSchema) => {
    signIn('credentials', {email: data.email, password: data.password})
  }

	useEffect(() => {
		if(searchParams.get('error')) {
			setLoginError(searchParams.get('error'))
		}
	}, [])
  
  return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Sign In</h1>
			{loginRrror && (
				<span className='block mb-3 text-red-600 font-medium text-xl capitalize'>
					{loginRrror}
				</span>
			)}
			<form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='email' className='block mb-1 w-full'>
						Email
					</label>
					<input
						type='email'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						{...register('email')}
					/>
					{errors.email && <span className='text-red-600'>{errors.email.message}</span>}
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
					{errors.password && <span className='text-red-600'>{errors.password.message}</span>}
				</div>
				<div className='my-5'>
					<button
						type='submit'
						className='w-full py-2 px-4 rounded-md text-white bg-blue-500'
					>
						sign in
					</button>
				</div>
			</form>
			<Link
				href='/auth/forget-password'
				className='text-blue-500 underline underline-offset-4'
			>
				forget password?
			</Link>
		</div>
	)
}

export default SignIn
