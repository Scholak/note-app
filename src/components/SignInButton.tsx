'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const SignInButton = () => {
  const { data: session } = useSession()
  
  if(session && session?.user) {
    return (
			<button
				className='py-2 px-4 rounded shadow bg-sky-600 text-white'
				onClick={() => signOut()}
			>
				Sign Out
			</button>
		)
  }

  return (
		<div>
			<Link
				href='/auth/sign-up'
				className='py-2 px-4 rounded shadow bg-indigo-600 text-white mr-4'
			>
				Sign Up
			</Link>
			<Link
			href='/auth/sign-in'
				className='py-2 px-4 rounded shadow bg-green-600 text-white'
			>
				Sign In
			</Link>
		</div>
	)
}

export default SignInButton
