'use client'
import Backbutton from '@/components/backbutton'
import ItemsDetails from '@/components/itemsDetails'
import { ItemsList } from '@/components/itemsList'
import React,{useState} from 'react'

export default function ShoppingPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className=' h-screen'>
        <div className='h-[87%] p-5'>
            <div className='flex flex-col rounded-lg bg-white p-2 h-full'>
                <div className='border-2 border-red-400 h-[50%]'>
                  <h2>Details of items</h2>
                  <ItemsDetails item={selectedItem} />
                </div>
                <div className='border-2 border-yellow-200 h-[50%]'>
                  <ItemsList  onItemClick={handleItemClick} />
                </div>
            </div>
        </div>
        <Backbutton />
    </div>
  )
}
