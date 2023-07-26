import Providers from '@/providers/Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Note App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<Providers>
					<Navbar />
					<ToastContainer />
					<main className='container mx-auto md:my-12'>{children}</main>
				</Providers>
			</body>
		</html>
	)
}
