import React from 'react'
import { useSelector } from 'react-redux'

const Head = () => {

const cartItems=useSelector((store)=>store.cart.items)

  return (
    <div>Head
      <div>
        Total Items: {cartItems.length}
      </div>
    </div>
  )
}

export default Head