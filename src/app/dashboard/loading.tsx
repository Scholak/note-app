import React from 'react'
import Link from 'next/link'
import { Loader } from '@/components'
import { FaPlus } from 'react-icons/fa'

const Loading = () => {
	return (
		<div className='px-4 md:px-0'>
			<Loader width={300} height={50} className='mb-4' />
			<Loader width={300} height={30} />
			<div className='flex items-center gap-4 my-4'>
				<h3 className='text-2xl font-semibold'>Your Lists</h3>
				<Link
					href='/dashboard/lists/create'
					className='w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white'
				>
					<FaPlus className='text-lg' />
				</Link>
			</div>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
				{[1, 2, 3, 4, 5].map(id => (
					<div
						key={id}
						className='flex flex-col items-start justify-between rounded-lg shadow-lg p-12 bg-slate-50'
					>
						<div className='w-full'>
							<Loader width={125} height={30} className='mb-4' />
							<Loader height={100} className='mb-4 flex-1' />
						</div>
						<Loader width={150} height={30} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Loading
