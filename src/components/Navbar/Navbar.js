import React from 'react'
import { useLocation } from 'react-router-dom'
import NavList from './NavList'
import Logo from '../Logo/Logo'
import CartIcon from './CartIcon'

function Navbar() {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className={`navbar ${path === '/' ? 'navTransparent' : 'navBlack'}`}>
      <nav className='navbar__elements'>
        <Logo />
        <NavList />
        <CartIcon />
      </nav>
    </div>
  )
}

export default Navbar
