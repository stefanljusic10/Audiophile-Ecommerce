function hydrateStore() {
  const cartStorage = localStorage.getItem('cart')

  if (cartStorage !== null) {
    const currentStore = JSON.parse(cartStorage)
    const cleanedStore = currentStore.filter((product) => product.count > 0)
    return cleanedStore
  }
}

export default hydrateStore
