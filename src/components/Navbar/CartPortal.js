import React from 'react'
import reactDom from 'react-dom'
import { useSelector } from 'react-redux'
import ButtonRemoveAll from '../Button/ButtonRemoveAll'

function CartPortal() {
  let showCart = null
  const inCart = useSelector((state) => state.counter)
  console.log(inCart)

  // showing number off all items in cart
  const totalItemsInCart = inCart
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  if (totalItemsInCart === 0) {
    return null
  }

  showCart = inCart.map((item) => (
    <div className='cartPortal__products-item' key={item.itemInCart.id}>
      <img className='cartPortal__products-image' src={item.itemInCart.image.desktop} alt='img'></img>
      <div className='cartPortal__products-name text'>{item.itemInCart.name}</div>
      <div
        className='add-counter'
        role='button'
      >
        -
      </div>

      <div className='add-counter'>{item.count}</div>

      <div
        className='add-counter'
        role='button'
      >
        +
      </div>
    </div>
  ))

  return reactDom.createPortal(
    <div className='cartPortal productBox'>
      <div className='cartPortal__header'>
        <div className='cartPortal__header-heading heading-mini'>CART({totalItemsInCart})</div>
        <ButtonRemoveAll />
      </div>
      <div className='cartPortal__products'>
        {showCart}
      </div>
    </div>,
    document.getElementById('portal-cart'),
  )
}

export default CartPortal
