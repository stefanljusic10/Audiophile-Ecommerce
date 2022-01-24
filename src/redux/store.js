import { configureStore } from '@reduxjs/toolkit'
import cartMiddleware from './cartMiddleware'
import counterReducer from './counterSlice'
import toggleCartReducer from './toggleCartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggleCart: toggleCartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
})
