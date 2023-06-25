import { authOptions } from '@/lib/authOptions'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import React from 'react'

export const metadata: Metadata = {
	title: 'Dashboard',
}

const page = async () => {
  const session = await getServerSession(authOptions)

  return (
		<div className='m-12'>
     <h1 className='mb-3 text-4xl font-bold'>Dashboard</h1>
     <p className='textxl font-medium'>Welcome {session?.user?.name}</p>
		</div>
	)
}

export default page
