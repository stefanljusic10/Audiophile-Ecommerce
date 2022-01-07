import React from 'react'

function PreviewImage({ image }) {
  return (
    <div className='selected__box productBox'>
      <img className='selected__box-image' src={image} alt='PRODUCT' />
    </div>
  )
}

export default PreviewImage
