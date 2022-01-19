import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import toggleCartReducer from './toggleCartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggleCart: toggleCartReducer,
  },
})
