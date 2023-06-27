import DeleteListBtn from '@/components/DeleteListBtn'
import { getListById } from '@/services/listService'
import Link from 'next/link'
import React from 'react'

export const revalidate = 0

interface Params {
  params: {
    id: number
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

  return (
		<div className='container mx-auto mt-12'>
			<h3 className='mb-8 text-4xl font-bold capitalize'>{list.name}</h3>
      {list?.description ? <p>{list.description}</p> : <p className='text-slate-500'>No description</p>}
      <DeleteListBtn id={list.id} />
      <Link href='/dashboard' className='inline-block mt-3 text-sky-500 underline underline-offset-2'>return to lists</Link>
		</div>
	)
}

export default page
