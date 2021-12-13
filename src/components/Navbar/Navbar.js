import React from 'react'
import NavList from './NavList'

function Navbar() {
  return (
    <div className='navbar'>
      <nav className='navbar__elements'>
        <img className='navbar__elements-logo' alt='AUDIOPHILE LOGO' />
        <NavList />
        <img className='navbar__elements-cart' alt='AUDIOPHILE CART ICON' />
      </nav>
    </div>
  )
}

export default Navbar
