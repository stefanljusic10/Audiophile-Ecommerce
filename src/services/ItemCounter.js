function reducer(state, action) {
  // returns -1 if product doesn't exist
  const indexOfProductInCart = state.findIndex((item) => item.productName === action.productName)
  // copying previous state
  // const copyState = [...state]
  console.log(state)

  switch (action.type) {
    case 'increment': {
      // not in cart, append with initial count of 1
      if (indexOfProductInCart === -1) {
        // state[state.length] = { productName: action.productName, count: 1 }
        return [...state, { productName: action.productName, count: 1 }]
      }
      // In cart, increment count by 1
      // state[indexOfProductInCart] = { productName: action.productName, count: state.count + 1 }
      return [
        state.filter((item) => item.productName) !== action.productName,
        { productName: action.productName, count: state.count + 1 },
      ]
    }
    case 'decrement': {
      // not in cart, append with initial count of 0
      if (indexOfProductInCart === -1) {
        // state[state.length] = { productName: action.productName, count: 1 }
        return [...state, { productName: action.productName, count: 1 }]
      }
      // one product in cart, decrement by one, then remove from cart
      if (newState[indexOfProductInCart].count === 1) {
        return state.filter((item, index) => index !== indexOfProductInCart)
      }
      // Two or more items in cart, decrement count by 1
      return [
        state.filter((item) => item.productName) !== action.productName,
        { productName: action.productName, count: state.count - 1 },
      ]
    }
    case 'addToCart': {
      console.log(state)
      // not in cart, append product with initial action count
      if (indexOfProductInCart === -1) {
        console.log(state)
        // state[state.length] = { productName: action.productName, count: action.count }
        // console.log(state)
        return [...state, { productName: action.productName, count: action.count }]
      }
      console.log(state)
      // state[indexOfProductInCart] = { productName: action.productName, count: action.count }
      return [
        state.filter((item) => item.productName) !== action.productName,
        { productName: action.productName, count: action.count },
      ]
    }
    case 'remove': return state.filter((item, index) => index !== indexOfProductInCart)
    default: return state
  }
}

export default reducer
