import { configureStore } from '@reduxjs/toolkit'
import cartMiddleware from './cartMiddleware'
import counterReducer from './counterSlice'
import toggleCartReducer from './toggleCartSlice'
import refreshStore from './refreshStore'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggleCart: toggleCartReducer,
  },
  preloadState: refreshStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
})
