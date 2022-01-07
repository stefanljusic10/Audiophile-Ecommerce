import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Products from './Products'
import About from './About'

function Homepage() {
  return (
    <div className='homepage'>
      <Hero />
      <Categories />
      <Products />
      <About />
    </div>
  )
}

export default Homepage
