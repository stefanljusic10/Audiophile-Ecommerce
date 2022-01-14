/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from 'react'
import { ItemCounterContext } from '../../App'

function AddToCart({ product }) {
  const itemCounter = useContext(ItemCounterContext)
  const [countItem, setCountItem] = useState(0)

  const changeCount = (e) => {
    if (e === '+') { setCountItem(countItem + 1) }
    if (e === '-' && countItem > 0) { setCountItem(countItem - 1) }
  }

  useEffect(() => {
    console.log(itemCounter.state)
  }, [itemCounter.state])

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
        onClick={() => {
          itemCounter.dispatch({ type: 'addToCart', productName: product.name, count: countItem })
          console.log(itemCounter.state)
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCart
