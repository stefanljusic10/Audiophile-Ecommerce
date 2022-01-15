import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'

function Hero() {
  const navigate = useNavigate()
  const data = useContext(DataContext)
  const product = data[3]

  return (
    <div className='hero'>
      <img className='hero-image' src='./assets/home/desktop/image-hero.jpg' alt='hero'></img>
      <div className='hero__content'>
        <h3 className='hero-header--third'>New Product</h3>
        <h1 className='hero-header--first heading margin-top-small'>XX99 Mark II HEADPHONES</h1>
        <p className='hero-text margin-top-small text'>
          Experience natural, lifelike audio and exceptional
          <br></br>
          build quality made for the passionate music
          <br></br>
          enthusiasist.
        </p>
        <button
          className='btnOrange margin-top-small'
          onClick={() => navigate(`${product.category}/${product.slug}`)}
        >
          See Product
        </button>
      </div>
    </div>
  )
}

export default Hero
