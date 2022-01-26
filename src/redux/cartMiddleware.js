const cartMiddleware = (store) => (next) => (action) => {
  const state = store.getState().counter
  localStorage.setItem('cart', JSON.stringify(state))

  return next(action)
}

export default cartMiddleware
