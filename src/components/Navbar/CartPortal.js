import React from 'react'
import reactDom from 'react-dom'

function CartPortal() {
  return reactDom.createPortal(
    <div className='cartPortal productBox'>
      Cart Portal
    </div>,
    document.getElementById('portal-cart'),
  )
}

export default CartPortal
