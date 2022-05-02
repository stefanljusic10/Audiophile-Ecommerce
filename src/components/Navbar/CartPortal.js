/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonRemoveAll from '../Button/ButtonRemoveAll'
import { increment, decrement } from '../../redux/counterSlice'

function CartPortal() {
  const navigate = useNavigate()
  const inCart = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  // showing number off all items in cart
  const totalIPriceInCart = inCart
    .map((item) => item.count * item.itemInCart.price)
    .reduce((acc, curr) => acc + curr, 0)

  // showing number off all items in cart
  const totalItemsInCart = inCart
    .map((item) => item.count)
    .reduce((acc, curr) => acc + curr, 0)

  if (totalItemsInCart === 0) {
    return null
  }

  const showCart = inCart.map((item) => (
    <div className='cartPortal__products-item' key={item.itemInCart.id}>
      <img className='cartPortal__products-image' src={item.itemInCart.image.desktop} alt='img'></img>
      <div className='cartPortal__products-name text'>{item.itemInCart.name}</div>
      <div className='cartPortal__products-counter'>
        <div className='add-counter' role='button' onClick={() => dispatch(decrement(item))}>-</div>
        <div className='add-counter'>{item.count}</div>
        <div className='add-counter' role='button' onClick={() => dispatch(increment(item))}>+</div>
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
      <div className='cartPortal__checkout'>
        <button
          className='cartPortal__btnCheckout btnOrange'
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </button>
        <div className='cartPortal__checkoutPrice heading-mini'>$ {totalIPriceInCart}</div>
      </div>
    </div>,
    document.getElementById('portal-cart'),
  )
}

export default CartPortal
