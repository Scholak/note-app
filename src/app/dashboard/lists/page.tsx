import { getLists } from '@/services/listService'
import React from 'react'

export const revalidate = 0

const page = async () => {
  const data = await getLists()

  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default page
