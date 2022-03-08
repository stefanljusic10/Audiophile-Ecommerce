/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/counterSlice'

function AddToCart({ product }) {
  const [countItem, setCountItem] = useState(0)
  const dispatch = useDispatch()

  const changeCount = (e) => {
    if (e === '+') { setCountItem(countItem + 1) }
    if (e === '-' && countItem > 0) { setCountItem(countItem - 1) }
  }

  return (
    <div className='add margin-top-small'>
      <div
        className='add-counter'
        onClick={(e) => changeCount(e.target.innerText)}
        role='button'
      >
        -
      </div>

      <div className='add-counter'>{countItem}</div>

      <div
        className='add-counter'
        onClick={(e) => changeCount(e.target.innerText)}
        role='button'
      >
        +
      </div>
      <button
        className='add-btn btnOrange'
        onClick={
          () => dispatch(addToCart({
            productName: product.name,
            price: product.price,
            count: countItem,
          }))
        }
      >
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCart
