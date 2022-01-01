import React, { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Home/Hero'
import Categories from './components/Home/Categories'
import Products from './components/Home/Products'
import About from './components/Home/About'
import Navbar from './components/Navbar/Navbar'
import store from './services/data.json'
import Footer from './components/Footer/Footer'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Headphones from './components/Headphones/Headphones'
import './scss/main.scss'

export const StoreContext = createContext(store)

function App() {
  return (
    <div className='app'>
      <StoreContext.Provider value={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Categories />
          <Products />
          <About />
          <Footer />
        </Router>
      </StoreContext.Provider>
    </div>
  )
}

export default App
