import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DataContext } from '../../App'
import CartPortal from './CartPortal'

function CartIcon() {
  const [isHover, setIsHover] = useState(false)
  const itemCounter = useSelector((state) => state.counter)
  const data = useContext(DataContext)
  const cartIcon = data[6].cart.desktop

  const hoverCartOn = () => { setIsHover(true) }
  const hoverCartOff = () => { setIsHover(false) }

  const allItemsCountSum = itemCounter
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  const numberOfItemsInCart = (
    <span className='navbar__elements-sum'>
      {allItemsCountSum}
    </span>
  )

  return (
    <Link
      className='link'
      to='/cart'
      onMouseOver={() => hoverCartOn()}
      onMouseOut={() => hoverCartOff()}
    >
      <img className='navbar__elements-cart' src={cartIcon} alt='AUDIOPHILE CART ICON' />
      {allItemsCountSum > 0 ? numberOfItemsInCart : null}
      {isHover ? <CartPortal /> : null}
    </Link>
  )
}

export default CartIcon
