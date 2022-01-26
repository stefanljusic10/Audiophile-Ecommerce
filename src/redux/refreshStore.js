const refreshStore = () => {
  if (localStorage.getItem('cart') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'))
  }
}

export default refreshStore
