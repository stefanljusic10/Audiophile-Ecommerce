export const reducer = (state, action) => {
  // returns -1 if product doesn't exist
  const indexOfProductInCart = state.findIndex((item) => item.productName === action.productName)
  // copying previous state
  const copyState = [...state]

  switch (action.type) {
    case 'increment': {
      // not in cart, append with initial count of 1
      if (indexOfProductInCart === -1) {
        copyState[state.length] = { productName: action.productName, count: 1 }
        return copyState
      }
      // In cart, increment count by 1
      copyState[indexOfProductInCart] = { productName: action.productName, count: state.count + 1 }
      return copyState
    }
    case 'decrement': {
      // not in cart, append with initial count of 0
      if (indexOfProductInCart === -1) {
        copyState[state.length] = { productName: action.productName, count: 1 }
        return copyState
      }
      // one product in cart, decrement by one, then remove from cart
      if (newState[indexOfProductInCart].count === 1) {
        return state.filter((item, index) => index !== indexOfProductInCart)
      }
      // Two or more items in cart, decrement count by 1
      copyState[indexOfProductInCart] = { productName: action.productName, count: state.count - 1 }
      return copyState
    }
    case 'addToCart': {
      // not in cart, append product with initial action count
      if (indexOfProductInCart === -1) {
        copyState[state.length] = { productName: action.productName, count: action.count }
        return copyState
      }
      copyState[indexOfProductInCart] = { productName: action.productName, count: action.count }
      return copyState
    }
    case 'remove': return state.filter((item, index) => index !== indexOfProductInCart)
    default: return state
  }
}
