import DeleteAccountBtn from '@/components/DeleteAccountBtn'
import DeleteListBtn from '@/components/DeleteListBtn'
import { authOptions } from '@/lib/authOptions'
import { getLists } from '@/services/listService'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const metadata: Metadata = {
	title: 'Dashboard',
}

const Dashboard = async () => {
  const session = await getServerSession(authOptions)

  const lists = await getLists()

  return (
		<div className='m-12'>
			<p className='mb-4 text-4xl font-bold'>Welcome {session?.user?.name}</p>
			<DeleteAccountBtn />
			<div className='flex items-center gap-4 mb-4'>
				<h3 className='text-2xl font-semibold'>Your Lists</h3>
				<Link
					href='/dashboard/lists/create'
					className='w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white'
				>
					<FaPlus className='text-lg' />
				</Link>
			</div>
			<div className='grid grid-cols-4 gap-5'>
				{lists.map(list => (
					<div key={list.id} className='flex flex-col items-start justify-between rounded-lg shadow-lg p-12 bg-slate-50'>
						<Link href={`/dashboard/lists/${list.id}`}>
							<p className='text-lg font-bold capitalize'>{list.name}</p>
							{list.description && <p>{list.description}</p>}
						</Link>
						<DeleteListBtn id={list.id} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Dashboard
