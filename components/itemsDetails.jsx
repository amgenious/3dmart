import React from 'react'

const ItemsDetails = ({item}) => {
  return (
    <div>
      {item ? (
        <>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
        </>
      ) : (
        <p>Select a item to view details</p>
      )}
    </div>
  )
}

export default ItemsDetails