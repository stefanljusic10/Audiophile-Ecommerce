import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function About() {
  const store = useContext(StoreContext)
  const bestGearImage = store[6].bestGear.desktop

  return (
    <div className='about'>
      <div className='about__content'>
        <div className='about__content-header'>Bringing out the <span className='about__content-header--word'>best</span> audio gear</div>
        <div className='about__content-text text margin-top-small'>Located at the heart of New York. Audiophile is the premier store for high end headphones, earphones, speakers andaudio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of products. Stop by our store to meet some of fantastic people who make Audiophile the best place to buy your portable audio equimpent.</div>
      </div>
      <div className='about__gear'>
        <img className='about__gear-image' src={bestGearImage} alt='BEST GEAR' />
      </div>
    </div>
  )
}

export default About
