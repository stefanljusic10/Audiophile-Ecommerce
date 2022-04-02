import store from '../redux/store'
import { openCartPopup, closeCartPopup } from '../redux/toggleCartSlice'

const toggleCartPortal = (e) => {
  const classListString = e.target.classList.value

  if (classListString.indexOf('cartIcon-icon') !== -1) {
    store.dispatch(openCartPopup())
  } else if (
    classListString.indexOf('cartPortal') === -1 && classListString.indexOf('add-counter') === -1) {
    store.dispatch(closeCartPopup())
  }
}

export default toggleCartPortal
