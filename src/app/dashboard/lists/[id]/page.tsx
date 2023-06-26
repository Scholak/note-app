import { getListById } from '@/services/listService'
import React from 'react'

export const revalidate = 0

interface Params {
  params: {
    id: number
  }
}

const page = async ({params}: Params) => {
  const list = getListById(params.id)

  return (
    <div>
      id - {params.id}
    </div>
  )
}

export default page
