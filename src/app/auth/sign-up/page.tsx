'use client'

import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import axios from 'axios'

const page = () => {
  const router = useRouter()

  const [error, setError] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/auth/register', {name, email, password})
    
      if(res.status === 200) {
				toast.success('Signed up successfully!')
        router.push('/auth/sign-in')
      } else {
        setMessage('something went wrong')
      }
    } catch(error: any) {
      setError(error.response.data.message)
    }
  }
  
  return (
		<div className='m-12'>
			<h1 className='text-4xl font-bold'>Sign Up</h1>
			{error && (
				<span className='block mb-3 text-red-600 font-medium text-xl capitalize'>
					{error}
				</span>
			)}
			{message && (
				<span className='block mb-3 text-yellow-600 font-medium text-xl capitalize'>
					{message}
				</span>
			)}
			<form onSubmit={handleSubmit} className='w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='name' className='block mb-1 w-full'>
						Name
					</label>
					<input
						type='text'
						className='w-full border border-slate-600 py-1 px-2 rounded text-black'
						onChange={e => setName(e.target.value)}
						required
					/>
				</div>
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
				<div className='mt-5 w-full'>
					<button
						type='submit'
						className='w-full py-2 rounded-md text-white bg-blue-500'
					>
						sign up
					</button>
				</div>
			</form>
		</div>
	)
}

export default page
