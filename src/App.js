import React, { createContext } from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import store from './services/data.json'
import Footer from './components/Footer/Footer'
import './scss/main.scss'

export const StoreContext = createContext(store)

function App() {
  return (
    <div className='app'>
      <StoreContext.Provider value={store}>
        <Navbar />
        <Home />
        <Footer />
      </StoreContext.Provider>
    </div>
  )
}

export default App
