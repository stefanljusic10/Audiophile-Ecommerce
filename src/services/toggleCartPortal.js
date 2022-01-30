import store from '../redux/store'
import { openCartPopup, closeCartPopup } from '../redux/toggleCartSlice'

const toggleCartPortal = (e) => {
  console.log(e.target.classList)
  if (e.target.classList.contains('cartIcon-icon')) {
    store.dispatch(openCartPopup())
  } else if (!e.target.classList.contains('cartPortal')) {
    store.dispatch(closeCartPopup())
  }
}

export default toggleCartPortal
