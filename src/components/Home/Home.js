import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Products from './HomeProducts/Products'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
