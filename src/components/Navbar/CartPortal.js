import React from 'react'
import reactDom from 'react-dom'
import { useSelector } from 'react-redux'

function CartPortal() {
  const inCart = useSelector((state) => state.counter)
  console.log(inCart)

  // showing number off all items in cart
  const totalItemsInCart = inCart
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  if (totalItemsInCart === 0) {
    return null
  }

  return reactDom.createPortal(
    <div className='cartPortal productBox'>

    </div>,
    document.getElementById('portal-cart'),
  )
}

export default CartPortal
