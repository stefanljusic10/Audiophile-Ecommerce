import store from '../redux/store'
import { openCartPopup, closeCartPopup } from '../redux/toggleCartSlice'

const toggleCartPortal = (e) => {
  if (e.target.classList.contains('navbar__elements-cart')) {
    store.dispatch(openCartPopup())
  } else store.dispatch(closeCartPopup())
}

export default toggleCartPortal
