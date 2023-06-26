import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				try {
					const res = await axios.post(
						'http://127.0.0.1:3000/api/auth/login',
						credentials
					)

					if (res.data) {
						return res.data
					}

					return null
				} catch (error: any) {
					throw new Error(error.response.data.message)
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},
		async session({ session, token }) {
			session.user = token as any
			return session
		},
		async redirect() {
			return '/dashboard'
		}
	},
	pages: {
		signIn: '/auth/sign-in',
		error: '/auth/sign-in',
	},
}