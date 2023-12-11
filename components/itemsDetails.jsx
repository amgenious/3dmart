import React from 'react'

const ItemsDetails = ({item}) => {
  return (
    <div>
      {item ? (
        <>
          <p>Name: {item.name}</p>
          <div>
            <iframe src={item.url} width={500} height={500}></iframe>
          </div>
        </>
      ) : (
        <p>Select a item to view details</p>
      )}
    </div>
  )
}

export default ItemsDetails