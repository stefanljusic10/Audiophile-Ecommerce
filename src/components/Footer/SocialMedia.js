import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../App'

function SocialMedia() {
  const store = useContext(StoreContext)
  const { social } = store[6]
  const socialIconsJSX = social.map((icon) => (
    <div className='social__icon margin-top-huge' key={icon.name}>
      <Link className='link' to={icon.name} target='_blank'>
        <img src={icon.desktop} alt={icon.name}></img>
      </Link>
    </div>
  ))

  return (
    <div className='social'>
      {socialIconsJSX}
    </div>
  )
}

export default SocialMedia
