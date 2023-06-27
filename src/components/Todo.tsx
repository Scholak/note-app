'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

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
        toast.success('todo delted successfully')
        router.refresh()
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
		<li
			onClick={() => handleToggle(todo.id, !todo.completed)}
			onDoubleClick={() => handleDelete(todo.id)}
			className='relative flex items-center gap-2 py-6 px-12 rounded-md shadow-md bg-slate-50 cursor-pointer'
		>
			<span
				className={`w-2 h-2 rounded-full ${
					todo.completed ? 'bg-green-600' : 'bg-red-600'
				}`}
			></span>
			<p>{todo.name}</p>
		</li>
	)
}

export default Todo
