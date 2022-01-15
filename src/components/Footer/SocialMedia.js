import React, { useContext } from 'react'
import { DataContext } from '../../App'

function SocialMedia() {
  const data = useContext(DataContext)
  const { social } = data[6]
  const socialIconsJSX = social.map((icon) => (
    <div className='social__icon' key={icon.name}>
      <img src={icon.desktop} alt={icon.name}></img>
    </div>
  ))

  return (
    <div className='social margin-top-huge'>
      {socialIconsJSX}
    </div>
  )
}

export default SocialMedia
