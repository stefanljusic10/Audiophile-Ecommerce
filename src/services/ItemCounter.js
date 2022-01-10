export const initialState = [
  {
    productName: '',
    count: 0,
  },
]

export const reducer = (state, action) => {
  let productIndex
  const newState = state

  switch (action.type) {
    case 'increment':
      if (state.filter((item) => item.productName === action.productName).length === 0) {
        return state.push({ productName: action.productName, count: action.count + 1 })
      }

      productIndex = state.findIndex((item) => item.productName === action.productName)
      newState[productIndex].count += 1
      return newState

    case 'decrement':
      if (state.filter((item) => item.productName === action.productName).length === 0) {
        return state.push({ productName: action.productName, count: action.count - 1 })
      }

      productIndex = state.findIndex((item) => item.productName === action.productName)
      newState[productIndex].count -= 1
      return newState

    case 'addToCart': return { counter: state.counter + action.payload }
    case 'remove': return initialState
    default: return state
  }
}
