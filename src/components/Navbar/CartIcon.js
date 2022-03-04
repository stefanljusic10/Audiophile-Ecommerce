import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../App'
import CartPortal from './CartPortal'

function CartIcon() {
  const itemCounter = useSelector((state) => state.counter)
  const toggleCartPortal = useSelector((state) => state.toggleCart)
  const data = useContext(DataContext)
  const cartIcon = data[6].cart.desktop

  // v1
  // showing number off all items in cart
  const allItemsCountSum = itemCounter
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  // v2
  // const localSt = JSON.parse(localStorage.getItem('cart'))
  // const totalitemsInCart = localSt
  //   .map((item) => item.count)
  //   .reduce((prev, curr) => prev + curr, 0)

  // console.log(...localSt)
  // console.log(totalitemsInCart)

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
