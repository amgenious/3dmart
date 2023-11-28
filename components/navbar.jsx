import React from 'react'
import Image from 'next/image'
import { share, user, mart } from '@/assets'

export default function Navbar() {
  return (
    <div className='w-full flex items-center justify-between' style={{background:"white"}}>
      <div className='cursor-pointer pl-2'>
        <Image src={share} width={20} height={20} alt='share' />
      </div>
      <div>
      <Image src={mart} width={200} height={100} alt='share' />
      </div>
      <div className='cursor-pointer pr-2'>
      <Image src={user} width={25} height={25} alt='user' />
      </div>
    </div>
  )
}
