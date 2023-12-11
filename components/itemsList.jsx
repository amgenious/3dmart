import React from 'react'

export const ItemsList = ({onItemClick}) => {

    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Phone' ,image:'../../assets/glb_files/electronics.glb'},
        { id: 4, name: 'Recoder',image:'../../assets/glb_files/recorder.glb' },
      ];

  return (
    <>
    <div className='p-5'>
    <ul className='flex justify-evenly flex-wrap'>
      {items.map((item, index) => (
          <li className='cursor-pointer border-2 mb-2 p-5' key={item.id} onClick={() => onItemClick(item)}>
          {item.name}
        </li>
      ))}
    </ul>
      </div>
    </>
  )
}
