import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
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
        <Link className='link' to='/xx99'>
          <button className='btnOrange margin-top-small'>See Product</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
