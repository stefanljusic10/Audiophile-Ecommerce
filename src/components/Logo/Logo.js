import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../App'

function Logo() {
  const store = useContext(StoreContext)
  const logo = store[6].logo.desktop

  return (
    <Link className='link' to='/'>
      <img className='logo' src={logo} alt='LOGO' />
    </Link>
  )
}

export default Logo
