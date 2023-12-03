import React from 'react'
import Link from 'next/link'

export default function Backbutton() {
  return (
    <Link href='/'>
    <div className='absolute bottom-0 w-full p-5 text-center flex justify-center'>
        <div className='cursor-pointer'>
       <p className='w-[100%] p-2 px-5 rounded-md hover:bg-zinc-600 hover:text-white bg-white'>Back</p>
        </div>
    </div>
    </Link>
  )
}
