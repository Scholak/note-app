import { authOptions } from '@/lib/authOptions'
import db from '@/lib/database'
import axios from 'axios'
import { getServerSession } from 'next-auth'

const api = axios.create({
  baseURL: process.env.APP_URL
})

export const getLists = async () => {
  try {
    const session = await getServerSession(authOptions)

    const lists = await db.list.findMany({
			where: { userId: Number(session?.user.id) },
		})
    
    return lists
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getListById = async (id: number) => {
	try {
		const session = await getServerSession(authOptions)

		const list = await db.list.findFirst({
			where: {
				id: Number(id),
				userId: Number(session?.user.id),
			},
		})

		return list
	} catch (error: any) {
		throw new Error(error.message)
	}
}