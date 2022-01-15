import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavList from './NavList'
import { DataContext } from '../../App'
import Logo from '../Logo/Logo'

function Navbar() {
  const itemCounter = useSelector((state) => state.counter)
  const data = useContext(DataContext)
  const cartIcon = data[6].cart.desktop
  const location = useLocation()
  const path = location.pathname

  console.log(itemCounter)

  const itemsSum = itemCounter
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0)

  console.log(itemsSum)

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
