import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavList from './NavList'
import { StoreContext } from '../../App'

function Navbar() {
  const store = useContext(StoreContext)
  const logo = store[6].logo.desktop
  const cartIcon = store[6].cart.desktop

  const location = useLocation()
  console.log(location)

  return (
    <div className={`navbar ${location.pathname === '/' ? 'navTransparent' : 'navBlack'}`}>
      <nav className='navbar__elements'>
        <Link className='link' to='/'>
          <img className='logo' src={logo} alt='AUDIOPHILE LOGO' />
        </Link>
        <NavList />
        <Link className='link' to='/cart'>
          <img className='navbar__elements-cart' src={cartIcon} alt='AUDIOPHILE CART ICON' />
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
