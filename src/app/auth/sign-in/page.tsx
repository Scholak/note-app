'use client'

import { SignInResponse, signIn } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Link from 'next/link'

const SignIn = () => {
  const router = useRouter()

  const [error, setError] = useState<string | undefined>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res: SignInResponse | undefined = await signIn('credentials', {email, password, redirect: false})

    if(!res?.error) {
			toast.success('Signed in successfully!')
			router.push('/dashboard')
    } else {
      setError(res?.error)
    }
  }
  
  return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Sign In</h1>
			{error && (
				<span className='block mb-3 text-red-600 font-medium text-xl capitalize'>
					{error}
				</span>
			)}
			<form onSubmit={handleSubmit} className='w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='email' className='block mb-1 w-full'>
						Email
					</label>
					<input
						type='email'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='my-3'>
					<label htmlFor='password' className='block mb-1 w-full'>
						Password
					</label>
					<input
						type='password'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						onChange={e => setPassword(e.target.value)}
						required
					/>
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
			<Link href='/auth/forget-password' className='text-blue-500 underline underline-offset-4'>forget password?</Link>
		</div>
	)
}

export default SignIn
