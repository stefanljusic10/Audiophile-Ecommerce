import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Products from './Products'
import About from './About'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Categories />
      <Products />
      <About />
    </div>
  )
}

export default Home
