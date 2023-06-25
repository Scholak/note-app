'use client'

import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>('')
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await axios.post('/api/auth/reset-password', { email })

    if(res.data.accepted.length === 1) {
      toast.success('Reset password link has been sent to your email!')
    }
  }

  return (
		<div className='m-12'>
      <h1 className='text-4xl font-bold'>Forget Password</h1>
			<form onSubmit={handleSubmit} className='w-full md:w-1/2'>
				<div className='my-3'>
					<label htmlFor='Email' className='block mb-1'>
						Email
					</label>
					<input
						type='email'
						className='w-full border border-slate-600 py-1 px-2 rounded-sm text-black'
						onChange={e => setEmail(e.target.value)}
						required
						placeholder='enter your email address'
					/>
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
