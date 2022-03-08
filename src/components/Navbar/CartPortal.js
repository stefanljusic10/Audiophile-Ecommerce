import React from 'react'
import reactDom from 'react-dom'
import { useSelector } from 'react-redux'

function CartPortal() {
  const inCart = useSelector((state) => state.counter)

  return reactDom.createPortal(
    <div className='cartPortal productBox'>

    </div>,
    document.getElementById('portal-cart'),
  )
}

export default CartPortal
