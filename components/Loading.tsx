import { Loader2Icon } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Loader2Icon className='h-10 w-10 animate-spin' />
    </div>
  )
}

export default Loading
