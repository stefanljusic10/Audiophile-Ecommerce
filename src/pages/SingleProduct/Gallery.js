import React from 'react'

function Gallery({ content }) {
  const image = content.gallery

  return (
    <div className='gallery margin-top-huge'>
      <div className='gallery-box productBox'>
        <img className='gallery-img' src={image.first.desktop} alt={content.name}></img>
      </div>
      <div className='gallery-box--second productBox'>
        <img className='gallery-img' src={image.third.desktop} alt={content.name}></img>
      </div>
      <div className='gallery-box productBox'>
        <img className='gallery-img' src={image.second.desktop} alt={content.name}></img>
      </div>
    </div>
  )
}

export default Gallery
