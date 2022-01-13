export const reducer = (state, action) => {
  // returns -1 if product doesn't exist
  const indexOfProductInCart = state.findIndex((item) => item.productName === action.productName)
  const newState = state

  switch (action.type) {
    case 'increment': {
      if (indexOfProductInCart) {
        newState[state.length] = { productName: action.productName, count: state.count + 1 }
        return newState
      }
      newState[indexOfProductInCart] = { productName: action.productName, count: state.count + 1 }
      return newState
    }
    case 'decrement': {
      if (indexOfProductInCart) {
        newState[state.length] = { productName: action.productName, count: state.count - 1 }
        return newState
      }
      newState[indexOfProductInCart] = { productName: action.productName, count: state.count - 1 }
      return newState
    }
    case 'addToCart': {
      if (indexOfProductInCart) {
        newState[state.length] = { productName: action.productName, count: action.count }
        return newState
      }
      newState[indexOfProductInCart] = { productName: action.productName, count: action.count }
      return newState
    }
    case 'remove': return state.splice(indexOfProductInCart, 1)
    default: return state
  }
}
