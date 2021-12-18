import React from 'react'
import NavList from './NavList'
import logo from '../../assets/shared/desktop/logo.svg'
import cartIcon from '../../assets/shared/desktop/icon-cart.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <nav className='navbar__elements'>
        <img className='navbar__elements-logo' src={logo} alt='AUDIOPHILE LOGO' />
        <NavList />
        <img className='navbar__elements-cart' src={cartIcon} alt='AUDIOPHILE CART ICON' />
      </nav>
    </div>
  )
}

export default Navbar
