'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const [password, setPassword] = useState<string>('')

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const res = await axios.put('http://localhost:3000/api/auth/update-password',{ password, token: searchParams.get('token') })

		if(res.status === 200) {
			toast.success(res.data.message)
			router.push('/auth/sign-in')
		}

  }

	return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Change Password</h1>
			<form onSubmit={handleSubmit} className='m-10 w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='password' className='block'>Enter Your New Password</label>
					<input
						type='password'
						className='w-full border border-slate-600 py-1 px-2 rounded-sm text-black'
						onChange={e => setPassword(e.target.value)}
						required
					/>
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
		</div>
	)
}

export default page
