import React, { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SelectedCategory from './pages/SelectedCategory/SelectedCategory'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import ScrollToTop from './services/ScrollToTop'
import data from './services/data.json'
import store from './redux/store'
import './scss/main.scss'

export const DataContext = createContext(data)
export const ItemCounterContext = createContext()

function App() {
  return (
    <div className='app'>
      <DataContext.Provider value={data}>
        <Provider store={store}>
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
        </Provider>
      </DataContext.Provider>
    </div>
  )
}

export default App
