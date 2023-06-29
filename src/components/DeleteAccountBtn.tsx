'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const DeleteAccountBtn = () => {
  const router = useRouter()
  
  const { data: session } = useSession()
  
  const handleDeleteAccount = async () => {
    try {
      const res = await axios.delete(`/api/auth/delete-account/${session?.user.id}`)
      
      if(res.status === 204) {
        toast.success('your account deleted successfully')
        router.push('/auth/sign-up')
      } else {
        toast.error('an error occured')
      }
    } catch (error: any) {
      toast.error('an error occured')
    }
  }
  
  return (
    <>
    {session?.user.id && (
      <p
      className='inline-block mb-12 text-red-600 underline underline-offset-2 cursor-pointer'
      onClick={handleDeleteAccount}
      >
      delete my account
      </p>
      )}
      </>
      )
    }
    
    export default DeleteAccountBtn
    