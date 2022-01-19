import React from 'react'
import reactDom from 'react-dom'

function CartPortal() {
  return reactDom.createPortal(
    <div className='cartPortal productBox'>

    </div>,
    document.getElementById('portal-cart'),
  )
}

export default CartPortal
