import React from 'react'
import Hero from './components/Home/Hero'
import Navbar from './components/Navbar/Navbar'
import './scss/main.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
