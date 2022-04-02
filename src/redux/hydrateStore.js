function hydrateStore() {
  const cartStorage = localStorage.getItem('cart')

  if (cartStorage !== null) {
    return JSON.parse(cartStorage)
  }
}

export default hydrateStore
