import { increment, decrement, addToCart, remove } from './counterSlice'

const cartMiddleware = (store) => (next) => (action) => {
  const state = store.getState().counter
  console.log(state)
  let cartStorage = null

  // add to local storage
  if (increment.match(action)) {
    const indexOfProductInCart = state
      .findIndex((item) => item.productName === action.payload.productName)
    // not in cart, append with initial count of 1
    if (indexOfProductInCart === -1) {
      cartStorage = [...state, { productName: action.payload.productName, count: 1 }]
      localStorage.setItem('cart', JSON.stringify(cartStorage))
    } else {
      // In cart, increment count by 1
      cartStorage = [
        state.filter((item) => item.productName) !== action.payload.productName,
        { productName: action.payload.productName, count: state.count + 1 },
      ]
      localStorage.setItem('cart', JSON.stringify(cartStorage))
    }
  }
  if (decrement.match(action)) {
    const indexOfProductInCart = state
      .findIndex((item) => item.productName === action.payload.productName)
    // not in cart, append with initial count of 0
    if (indexOfProductInCart === -1) {
      cartStorage = [...state, { productName: action.payload.productName, count: 1 }]
      localStorage.setItem('cart', JSON.stringify(cartStorage))
    }
    // one product in cart, decrement by one and remove from cart
    if (newState[indexOfProductInCart].count === 1) {
      cartStorage = state.filter((item, index) => index !== indexOfProductInCart)
      localStorage.setItem('cart', JSON.stringify(cartStorage))
    } else {
    // Two or more items in cart, decrement count by 1
      cartStorage = [
        state.filter((item) => item.productName) !== action.payload.productName,
        { productName: action.payload.productName, count: state.count - 1 },
      ]
      localStorage.setItem('cart', JSON.stringify(cartStorage))
    }
  }
  if (addToCart.match(action)) {
    localStorage.setItem('cart', JSON.stringify(cartStorage))
  }
  if (remove.match(action)) {
    const indexOfProductInCart = state
      .findIndex((item) => item.productName === action.productName)
    cartStorage = state.filter((item, index) => index !== indexOfProductInCart)
    localStorage.setItem('cart', JSON.stringify(cartStorage))
  }

  return next(action)
}

export default cartMiddleware
