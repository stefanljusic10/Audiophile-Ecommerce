import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <nav className='navbar__elements'>
        <img className='navbar__elements-logo' alt='AUDIOPHILE LOGO' />
        <ul className='navbar__elements-list'>
          <li className='navbar_elements-list--item'>Home</li>
          <li className='navbar_elements-list--item'>Headphones</li>
          <li className='navbar_elements-list--item'>Speakers</li>
          <li className='navbar_elements-list--item'>Earphones</li>
        </ul>
        <img className='navbar__elements-cart' alt='AUDIOPHILE CART ICON' />
      </nav>
    </div>
  )
}

export default Navbar
