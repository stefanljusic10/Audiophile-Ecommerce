import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../App'
import CartPortal from './CartPortal'

function CartIcon() {
  const itemCounter = useSelector((state) => state.counter)
  const toggleCartPortal = useSelector((state) => state.toggleCart)
  const data = useContext(DataContext)
  const cartIcon = data[6].cart.desktop
  console.log(toggleCartPortal)

  // showing number off all items in cart
  const allItemsCountSum = itemCounter
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  const numberOfItemsInCart = (
    <span className='cartIcon-counter'>
      {allItemsCountSum}
    </span>
  )

  return (
    <div className='cartIcon'>
      {allItemsCountSum > 0 ? numberOfItemsInCart : null}
      <img className='cartIcon-icon' src={cartIcon} alt='AUDIOPHILE CART ICON' />
      {toggleCartPortal.toggle ? <CartPortal /> : null}
    </div>
  )
}

export default CartIcon
