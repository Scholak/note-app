import React from 'react'
import Link from 'next/link'
import SignInButton from './SignInButton'

const Navbar = () => {
  return (
		<nav className='w-full h-12 bg-slate-50 shadow-sm px-4 py-2 flex items-center justify-around gap-4 text-black'>
			<ul className='flex gap-4 text-blue-500'>
        <li>
          <Link href='/'>Home</Link>
        </li>
				<li>
					<Link href='/dashboard'>Dashboard</Link>
				</li>
			</ul>
			<SignInButton />
		</nav>
	)
}

export default Navbar
