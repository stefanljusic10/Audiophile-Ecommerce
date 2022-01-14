export const reducer = (state, action) => {
  // returns -1 if product doesn't exist
  const indexOfProductInCart = state.findIndex((item) => item.productName === action.productName)
  // Copying previous state
  const copyState = [...state]

  switch (action.type) {
    case 'increment': {
      if (indexOfProductInCart === -1) {
        copyState[state.length] = { productName: action.productName, count: state.count + 1 }
        return copyState
      }
      copyState[indexOfProductInCart] = { productName: action.productName, count: state.count + 1 }
      return copyState
    }
    case 'decrement': {
      if (indexOfProductInCart === -1) {
        copyState[state.length] = { productName: action.productName, count: state.count - 1 }
        return copyState
      }
      copyState[indexOfProductInCart] = { productName: action.productName, count: state.count - 1 }
      return copyState
    }
    case 'addToCart': {
      if (indexOfProductInCart === -1) {
        copyState[state.length] = { productName: action.productName, count: action.count }
        return copyState
      }
      copyState[indexOfProductInCart] = { productName: action.productName, count: action.count }
      return copyState
    }
    case 'remove': return state.splice(indexOfProductInCart, 1)
    default: return state
  }
}
