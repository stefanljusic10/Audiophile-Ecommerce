import { increment, decrement, addToCart, remove } from './counterSlice'
import store from './store'

const cartMiddleware = (store) => (next) => (action) => {
  // add to local storage
  if (increment.match(action)) {

  }
  if (decrement.match(action)) {

  }
  if (addToCart.match(action)) {

  }
  if (remove.match(action)) {

  }

  return next(action)
}

export default cartMiddleware

// const contactsArray = JSON.parse(localStorage.getItem('contacts')) || []
//       contactsArray.push(data)
//       localStorage.setItem('contacts', JSON.stringify(contactsArray))
