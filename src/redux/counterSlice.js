import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    increment: (state, action) => {
      // returns -1 if product is not in cart
      // returns index of product if it is in cart
      const indexOfProductInCart = state
        .findIndex((item) => item.productName === action.payload.productName)
      // not in cart, append with initial count of 1
      if (indexOfProductInCart === -1) {
        return [...state, { productName: action.payload.productName, count: 1 }]
      }
      // In cart, increment count by 1
      return [
        state.filter((item) => item.productName) !== action.payload.productName,
        { productName: action.payload.productName, count: state.count + 1 },
      ]
    },
    decrement: (state, action) => {
      const indexOfProductInCart = state
        .findIndex((item) => item.productName === action.payload.productName)
      // not in cart, append with initial count of 0
      if (indexOfProductInCart === -1) {
        return [...state, { productName: action.payload.productName, count: 1 }]
      }
      // one product in cart, decrement by one and remove from cart
      if (newState[indexOfProductInCart].count === 1) {
        return state.filter((item, index) => index !== indexOfProductInCart)
      }
      // Two or more items in cart, decrement count by 1
      return [
        state.filter((item) => item.productName) !== action.payload.productName,
        { productName: action.payload.productName, count: state.count - 1 },
      ]
    },
    addToCart: (state, action) => {
      const indexOfProductInCart = state
        .findIndex((item) => item.productName === action.payload.productName)
      // not in cart, append product with initial action count
      if (indexOfProductInCart === -1) {
        return [...state, { productName: action.payload.productName, count: action.payload.count }]
      }
      // in cart, remove product and append same one with new initial action count
      return [
        ...state.slice(indexOfProductInCart, 0),
        { productName: action.payload.productName, count: action.payload.count },
      ]
    },
    remove: (state) => {
      const indexOfProductInCart = state
        .findIndex((item) => item.productName === action.productName)
      return state.filter((item, index) => index !== indexOfProductInCart)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addToCart, remove } = counterSlice.actions

export default counterSlice.reducer
