import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cart, settings, help, startcart,  } from '@/assets'

export const Downbuttons = () => {
  return (
    <div className='rounded-lg bg-opacity-20 bg-white absolute w-full bottom-0  flex justify-evenly items-center'>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-xl p-2'>
          <Link href='/shopping'>
        <Image src={startcart} width={50} height={50} alt='start-cart'/>
        <p className='text-sm text-slate-500'>Shopping</p>
          </Link>
        </div>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-xl p-2'>
        <Image src={cart} width={50} height={50} alt='cart'/>
        <p className='text-sm text-slate-500'>Cart</p>
        </div>
        <div className='cursor-pointer hover:shadow-xl p-2'>
            <Link href='/settings'>
            <Image src={settings} width={50} height={50} alt='settings' />
            <p className='text-sm text-slate-500'>Settings</p>
            </Link>
        </div>
        <div className='cursor-pointer hover:shadow-xl p-2'>
            <Link href='/' className='flex flex-col items-center'>
            <Image src={help} width={50} height={50} alt='help' />
            <p className='text-sm text-slate-500'>Help</p>
            </Link>
        </div>
    </div>
  )
}
