import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function SocialMedia() {
  const store = useContext(StoreContext)
  const { social } = store[6]
  const socialIconsJSX = social.map((icon) => (
    <div className='social__icon margin-top-huge' key={icon.name}>
      <img src={icon.desktop} alt={icon.name}></img>
    </div>
  ))

  return (
    <div className='social'>
      {socialIconsJSX}
    </div>
  )
}

export default SocialMedia
