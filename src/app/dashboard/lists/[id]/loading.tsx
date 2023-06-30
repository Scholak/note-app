import React from 'react'
import Link from 'next/link'
import Loader from '@/components/Loader'

const Loading = () => {
	return (
		<div className='px-4 md:px-0'>
			<Loader width={300} height={40} className='mb-8' />
			<Loader width={300} height={40} />
			<Loader width={300} height={40} className='mt-2' />
			<div className='flex items-center gap-4'>
				<h4 className='my-4 text-2xl font-bold capitalize'>
					Todos of This List
				</h4>
				<Loader width={30} height={30} />
			</div>
			<ul className='flex flex-col items-start gap-2 '>
				{[1, 2, 3, 4, 5].map(id => (
					<li key={id}>
						<Loader width={400} height={50} />
					</li>
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

export default Loading
