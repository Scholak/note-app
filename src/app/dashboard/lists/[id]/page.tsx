import AddTodo from '@/components/AddTodo'
import DeleteListBtn from '@/components/DeleteListBtn'
import Todo from '@/components/Todo'
import { getListById } from '@/services/listService'
import { getTodos } from '@/services/todoService'
import Link from 'next/link'
import React from 'react'

export const revalidate = 0

interface Params {
	params: {
		id: number
	}
}

export async function generateMetadata({ params }: Params) {
	const list = await getListById(params.id)

	if(list) {
		return {
			title: list.name
		}
	} else {
		return {
			title: 'List Not Found'
		}
	}
}

const page = async ({params}: Params) => {
  const list = await getListById(params.id)

  if(!list) {
    return (
			<div>
				<h3 className='mb-3 text-red-600 text-4xl font-bold'>List Not Found!</h3>
        <Link href='/dashboard' className='text-sky-500 underline underline-offset-2'>return to lists</Link>
			</div>
		)
  }

  const todos = await getTodos(list?.id)

  return (
		<div className='px-4 md:px-0'>
			<h3 className='mb-8 text-4xl font-bold capitalize'>{list.name}</h3>
			{list?.description ? (
				<p>{list.description}</p>
			) : (
				<p className='text-slate-500'>No description</p>
			)}
			<DeleteListBtn id={list.id} />
			<div className='flex items-center gap-4'>
				<h4 className='my-4 text-2xl font-bold capitalize'>
					Todos of This List
				</h4>
				<AddTodo listId={list.id} />
			</div>
			<ul className='flex flex-col items-start gap-2 '>
				{todos.map(todo => (
					<Todo key={todo.id} todo={todo} />
				))}
			</ul>
			<Link
				href='/dashboard'
				className='inline-block mt-3 text-sky-500 underline underline-offset-2'
			>
				return to lists
			</Link>
		</div>
	)
}

export default page
