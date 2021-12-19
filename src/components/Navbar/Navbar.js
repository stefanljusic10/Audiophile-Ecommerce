import React, { useContext } from 'react'
import NavList from './NavList'
import { StoreContext } from '../../App'

function Navbar() {
  const store = useContext(StoreContext)
  const logo = store[7].logo.desktop
  const cartIcon = store[7].cart.desktop
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
