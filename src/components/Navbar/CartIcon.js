import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../App'
import CartPortal from './CartPortal'

function CartIcon() {
  const itemCounter = useSelector((state) => state.counter)
  const toggleCart = useSelector((state) => state.toggleCart)
  const data = useContext(DataContext)
  const cartIcon = data[6].cart.desktop

  // showing number off all items in cart
  const allItemsCountSum = itemCounter
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  const numberOfItemsInCart = (
    <span className='navbar__elements-sum'>
      {allItemsCountSum}
    </span>
  )

  return (
    <div className='cartIcon' to='/cart'>
      <img className='navbar__elements-cart' src={cartIcon} alt='AUDIOPHILE CART ICON' />
      {allItemsCountSum > 0 ? numberOfItemsInCart : null}
      {toggleCart.toggle ? <CartPortal /> : null}
    </div>
  )
}

export default CartIcon
