function refreshStore() {
  const cart = localStorage.getItem('cart')

  if (cart !== null) {
    return JSON.parse(localStorage.getItem('applicationState'))
  }
}

export default refreshStore
