'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import SignInButton from './SignInButton'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const navEl = useRef<HTMLElement>(null)

	const [toggle, setToggle] = useState<boolean>(false)

	const handleToggle = () => {
		navEl.current?.classList.toggle('-translate-x-full')
		setToggle(!toggle)
	}

  return (
		<>
			<nav
				ref={navEl}
				className='absolute top-0 left-0 -translate-x-full w-2/3 h-full flex items-center flex-col justify-around gap-4 bg-slate-50 shadow-sm px-4 py-2 text-black transition duration-300 z-10 md:static md:w-full md:h-12 md:flex-row md:translate-x-0'
			>
				<ul className='flex flex-col gap-4 text-blue-500 md:flex-row'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/dashboard'>Dashboard</Link>
					</li>
				</ul>
				<SignInButton />
			</nav>
			<div
				onClick={handleToggle}
				className='absolute top-6 right-6 z-50 cursor-pointer text-3xl md:hidden'
			>
				{toggle ? <FaBars /> : <FaTimes />}
			</div>
		</>
	)
}

export default Navbar
