import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Complete Authentication',
}

const page = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <h1 className='text-4xl font-bold'>Complete Authentication Using Next.js</h1>
    </div>
  )
}

export default page
