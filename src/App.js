import React, { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SelectedCategory from './pages/SelectedCategory/SelectedCategory'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import store from './services/data.json'
import './scss/main.scss'

export const StoreContext = createContext(store)

function App() {
  return (
    <div className='app'>
      <StoreContext.Provider value={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/:selectedCategory' element={<SelectedCategory />} />
            <Route path='/:selectedCategory/:singleProduct' element={<SingleProduct />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </StoreContext.Provider>
    </div>
  )
}

export default App
