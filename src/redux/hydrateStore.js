function hydrateStore() {
  const cartStorage = localStorage.getItem('cart')
  console.log(cartStorage)

  if (cartStorage !== null) {
    return JSON.parse(cartStorage)
  }
}

export default hydrateStore
