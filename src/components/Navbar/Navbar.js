import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavList from './NavList'
import { StoreContext } from '../../App'
import Logo from '../Logo/Logo'

function Navbar() {
  const store = useContext(StoreContext)
  const cartIcon = store[6].cart.desktop
  const location = useLocation()
  const path = location.pathname

  return (
    <div className={`navbar ${path === '/' ? 'navTransparent' : 'navBlack'}`}>
      <nav className='navbar__elements'>
        <Logo />
        <NavList />
        <Link className='link' to='/cart'>
          <img className='navbar__elements-cart' src={cartIcon} alt='AUDIOPHILE CART ICON' />
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
