'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createListSchema } from '@/validation/list'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

const CreateList = () => {
  const router = useRouter()

	const { data: session } = useSession()

	const [responseError, setResponseError] = useState<string>()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateListSchema>({ resolver: zodResolver(createListSchema) })

	const onSubmit = async (data: CreateListSchema) => {
		try {
			const response = await axios.post('/api/list', {
				...data,
				userId: session?.user.id,
			})

			if (response.status === 201) {
				toast.success('List created successfully')
				router.push('/dashboard')
			}
		} catch (error: any) {
			setResponseError(error.response.data.message)
		}
	}

  return (
		<>
			{responseError && (
				<span className='block text-red-600'>{responseError}</span>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-3'>
					<label htmlFor='name' className='block mb-1 font-medium'>
						Name
					</label>
					<input
						type='text'
						id='name'
						{...register('name')}
						className='w-full rounded py-1 px-2 border border-slate-500'
					/>
					{errors.name && (
						<span className='text-red-600'>{errors.name.message}</span>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='block mb-1 font-medium'>
						Description
					</label>
					<textarea
						cols={30}
						id='description'
						{...register('description')}
						className='w-full rounded py-1 px-2 border border-slate-500'
					></textarea>
					{errors.description && (
						<span className='text-red-600'>{errors.description.message}</span>
					)}
				</div>
				<div>
					<button
						type='submit'
						className='py-2 px-4 rounded shadow bg-green-600 text-white font-medium'
					>
						create list
					</button>
				</div>
			</form>
		</>
	)
}

export default CreateList
