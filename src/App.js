import React, { createContext, useMemo, useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SelectedCategory from './pages/SelectedCategory/SelectedCategory'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import ScrollToTop from './services/ScrollToTop'
import store from './services/data.json'
import { reducer } from './services/ItemCounter'
import './scss/main.scss'

export const StoreContext = createContext(store)
export const ItemCounterContext = createContext()

function App() {
  const initialState = []
  const [state, dispatch] = useReducer(reducer, initialState)
  const counter = useMemo(() => ({ state, dispatch }), [])

  return (
    <div className='app'>
      <StoreContext.Provider value={store}>
        <ItemCounterContext.Provider value={counter}>
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/:selectedCategory' element={<SelectedCategory />} />
              <Route path='/:selectedCategory/:singleProduct' element={<SingleProduct />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Router>
        </ItemCounterContext.Provider>
      </StoreContext.Provider>
    </div>
  )
}

export default App
