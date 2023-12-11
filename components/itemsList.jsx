import React from 'react'
import { items } from '@/data/constant';
import Image from 'next/image';
export const ItemsList = ({onItemClick}) => {

  return (
    <>
    <div className='p-5'>
    <ul className='flex justify-evenly flex-wrap'>
      {items.map((item, index) => (
          <li className='cursor-pointer border-2 mb-2 p-5' key={item.id} onClick={() => onItemClick(item)}>
            <Image src={item.image} alt={item.image} width={50} height={50}/>
              <p>{item.name}</p>
        </li>
      ))}
    </ul>
      </div>
    </>
  )
}
