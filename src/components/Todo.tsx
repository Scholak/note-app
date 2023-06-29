'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'
import { FaTimes } from 'react-icons/fa'

interface Props {
  todo: Todo
}

const Todo = ({ todo }: Props) => {
  const router = useRouter()

  const handleToggle = async (id: number, completed: boolean) => {
    try {
      const res = await axios.put(`/api/todo/${id}`, { completed })

      if(res.status === 202) {
        toast.success('todo updated successfully')
        router.refresh()
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`/api/todo/${id}`)

      if(res.status === 204) {
        toast.success('todo deleted successfully')
        router.refresh()
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
		<li className='relative flex justify-between py-6 px-12 rounded-md shadow-md bg-slate-50 cursor-pointer w-full md:w-1/2'>
			<div
				onClick={() => handleToggle(todo.id, !todo.completed)}
				className='flex items-center gap-2'
			>
				<span
					className={`w-2 h-2 rounded-full ${
						todo.completed ? 'bg-green-600' : 'bg-red-600'
					}`}
				></span>
				<p>{todo.name}</p>
			</div>
			<FaTimes
				className='ml-4 text-lg text-red-600'
				onClick={() => handleDelete(todo.id)}
			/>
		</li>
	)
}

export default Todo
