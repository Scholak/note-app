'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

interface Props {
  id: number
}

const DeleteListBtn = ({id}: Props) => {
  const router = useRouter()

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`/api/list/${id}`)

      if(res.status === 204) {
        toast.success('list deleted successfully')
        router.refresh()
      }
    } catch (error: any) {
      toast.error(error.response?.data.message)
    }
  }
  
  return (
    <button onClick={() => handleDelete(id)} className='block mt-2 text-red-600 underline underline-offset-2'>
      delete list
    </button>
  )
}

export default DeleteListBtn
