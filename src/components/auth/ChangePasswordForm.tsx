'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema } from '@/validation/auth'

const ChangePassword = () => {
  const router = useRouter()
	const searchParams = useSearchParams()

	const [error, setError] = useState<string>('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
	})

	const onSubmit = async (data: ResetPasswordSchema) => {
		try {
			if (searchParams.get('token')) {
				toast.warning('reset password token is missing')
				router.push('/auth/forget-password')
			} else {
				const res = await axios.put('/api/auth/update-password', {
					password: data.password,
					token: searchParams.get('token'),
				})

				if (res.status === 200) {
					toast.success(res.data.message)
					router.push('/auth/sign-in')
				}
			}
		} catch (error: any) {
			setError(error.response.data.message)
		}
	}

  return (
		<>
			{error && <span className='text-red-600'>{error}</span>}
			<form onSubmit={handleSubmit(onSubmit)} className='m-10 w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='password' className='block'>
						Enter Your New Password
					</label>
					<input
						type='password'
						className='w-full border border-slate-600 py-1 px-2 rounded-sm text-black'
						{...register('password')}
					/>
					{errors.password && (
						<span className='text-red-600'>{errors.password.message}</span>
					)}
				</div>
				<div className='my-3'>
					<label htmlFor='password' className='block'>
						Confirm Your Password
					</label>
					<input
						type='password'
						className='w-full border border-slate-600 py-1 px-2 rounded-sm text-black'
						{...register('passwordConfirmation')}
					/>
					{errors.passwordConfirmation && (
						<span className='text-red-600'>
							{errors.passwordConfirmation.message}
						</span>
					)}
				</div>
				<div className='mt-5'>
					<button
						type='submit'
						className='w-full py-2 px-4 rounded-md text-white bg-blue-500'
					>
						update password
					</button>
				</div>
			</form>
		</>
	)
}

export default ChangePassword
