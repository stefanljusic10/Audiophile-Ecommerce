import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../App'

function Logo() {
  const data = useContext(DataContext)
  const logo = data[6].logo.desktop

  return (
    <Link className='link' to='/'>
      <img className='logo' src={logo} alt='LOGO' />
    </Link>
  )
}

export default Logo
