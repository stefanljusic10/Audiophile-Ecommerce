import { configureStore } from '@reduxjs/toolkit'
import cartMiddleware from './cartMiddleware'
import counterReducer from './counterSlice'
import toggleCartReducer from './toggleCartSlice'
import hydrateStore from './hydrateStore'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggleCart: toggleCartReducer,
  },
  preloadState: hydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
})
