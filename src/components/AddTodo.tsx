'use client'

import { createTodoSchema } from '@/validation/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'

interface Props {
  listId: number
}

const AddTodo = ({ listId }: Props) => {
  const router = useRouter()

	const formEl = useRef<HTMLDivElement>(null)

	const handleToggle = () => {
		formEl.current?.classList.toggle('opacity-0')
		formEl.current?.classList.toggle('pointer-events-none')
	}

	const handleCloseForm = () => {
		formEl.current?.classList.add('opacity-0')
		formEl.current?.classList.add('pointer-events-none')
	}

  const { register, handleSubmit, formState : { errors } } = useForm<CreateTodoSchema>({resolver: zodResolver(createTodoSchema)})
  
  const onSubmit = async (data: CreateTodoSchema) => {
    try {
      const res = await axios.post('/api/todo', { name: data.name, listId })

      if(res.status === 200) {
				formEl.current?.classList.add('opacity-0')
				formEl.current?.classList.add('pointer-events-none')
        toast.success('todo created successfully')
        router.refresh()
      }
    } catch (error: any) {
      toast.error('todo could not created')
    }
  }

  return (
		<div className='my-10 z-10'>
			<button
				type='submit'
				onClick={handleToggle}
				className='w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white'
			>
				<FaPlus className='text-lg' />
			</button>
			<div
				ref={formEl}
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-20 rounded-md shadow-xl transition duration-300 opacity-0 pointer-events-none'
			>
				<h3 className='mb-6 font-semibold text-2xl'>Create New Todo</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-6'>
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
					<div className='flex items-center justify-between'>
						<button
							type='submit'
							className='py-2 px-4 rounded shadow bg-green-600 text-white font-medium'
						>
							create new todo
						</button>
						<p onClick={handleCloseForm} className='text-red-600 underline underline-offset-2'>cancel</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddTodo
