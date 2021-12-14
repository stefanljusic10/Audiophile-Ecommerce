import React, { createContext } from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import store from './services/data.json'
import './scss/main.scss'

export const StoreContext = createContext()

function App() {
  return (
    <div className='app'>
      <StoreContext.Provider value={store}>
        <Navbar />
        <Home />
      </StoreContext.Provider>
    </div>
  )
}

export default App
