/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  // initialState: [],
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    increment: (state, action) => {
      // returns index of product if it is in cart
      const indexOfProductInCart = state
        .findIndex((item) => item.itemInCart.id === action.payload.itemInCart.id)
      // In cart, increment count by 1
      const incrementedState = state.map((item, index) => {
        if (indexOfProductInCart === index) {
          return {
            itemInCart: item.itemInCart,
            count: item.count + 1,
          }
        }
        return item
      })
      return incrementedState
    },
    decrement: (state, action) => {
      const indexOfProductInCart = state
        .findIndex((item) => item.itemInCart.id === action.payload.itemInCart.id)
      // one product in cart, decrement by one and remove from cart
      if (state[indexOfProductInCart].itemInCart.count === 1) {
        // return state.filter((_, index) => index !== indexOfProductInCart)
        return state.splice(indexOfProductInCart, 1)
      }
      // Two or more items in cart, decrement count by 1
      const decrementedState = state.map((item, index) => {
        if (indexOfProductInCart === index) {
          return {
            itemInCart: item.itemInCart,
            count: item.count - 1,
          }
        }
        return item
      })
      return decrementedState
    },
    addToCart: (state, action) => {
      const indexOfProductInCart = state
        .findIndex((item) => item.itemInCart.id === action.payload.itemInCart.id)
      // not in cart, append product with initial action count
      if (indexOfProductInCart === -1) {
        return [
          ...state,
          {
            itemInCart: { ...action.payload.itemInCart },
            count: action.payload.count,
          },
        ]
      }
      // in cart, remove product and append same one with new initial action count
      return [
        ...state.slice(indexOfProductInCart, 0),
        {
          itemInCart: { ...action.payload.itemInCart },
          count: action.payload.count,
        },
      ]
    },
    removeAll: () => [],
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addToCart, removeAll } = counterSlice.actions

export default counterSlice.reducer
