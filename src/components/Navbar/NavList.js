import React from 'react'
import { Link } from 'react-router-dom'

function NavList() {
  return (
    <ul className='navlist'>
      <Link className='link link-navlist' to='/'><li className='navlist-item'>Home</li></Link>
      <Link className='link link-navlist' to='/headphones'><li className='navlist-item'>Headphones</li></Link>
      <Link className='link link-navlist' to='/speakers'><li className='navlist-item'>Speakers</li></Link>
      <Link className='link link-navlist' to='/earphones'><li className='navlist-item'>Earphones</li></Link>
    </ul>
  )
}

export default NavList
