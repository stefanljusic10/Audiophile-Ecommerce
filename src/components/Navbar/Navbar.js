import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavList from './NavList'
import { StoreContext, ItemCounterContext } from '../../App'
import Logo from '../Logo/Logo'

function Navbar() {
  const store = useContext(StoreContext)
  const itemCounter = useContext(ItemCounterContext)
  const cartIcon = store[6].cart.desktop
  const location = useLocation()
  const path = location.pathname

  const itemsSum = itemCounter.state
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  const totalItemsInCart = (
    <span className='navbar__elements-sum'>
      {itemsSum}
    </span>
  )

  return (
    <div className={`navbar ${path === '/' ? 'navTransparent' : 'navBlack'}`}>
      <nav className='navbar__elements'>
        <Logo />
        <NavList />
        <Link className='link' to='/cart'>
          <img className='navbar__elements-cart' src={cartIcon} alt='AUDIOPHILE CART ICON' />
          {itemsSum > 0 ? totalItemsInCart : null}
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
