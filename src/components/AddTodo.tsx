'use client'

import { createTodoSchema } from '@/validation/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface Props {
  listId: number
}

const AddTodo = ({ listId }: Props) => {
  const router = useRouter()

  const { register, handleSubmit, formState : { errors } } = useForm<CreateTodoSchema>({resolver: zodResolver(createTodoSchema)})
  
  const onSubmit = async (data: CreateTodoSchema) => {
    try {
      const res = await axios.post('/api/todo', { name: data.name, listId })

      if(res.status === 200) {
        toast.success('todo created successfully')
        router.refresh()
      }
    } catch (error: any) {
      toast.error('todo could not created')
    }
  }

  return (
		<div className='my-10'>
      <h3 className='text-lg font-medium'>Create New Todo</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-3'>
					<label htmlFor='name' className='mb-1'>
						Name
					</label>
					<input
						type='text'
						{...register('name')}
						className='w-full rounded py-1 px-2 border border-slate-500'
					/>
					{errors.name && (
						<span className='text-red-600'>{errors.name.message}</span>
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
		</div>
	)
}

export default AddTodo
