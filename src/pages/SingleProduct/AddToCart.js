/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

function AddToCart() {
  const [count, setCount] = useState(0)

  const changeCount = (e) => {
    if (e === '+') { setCount(count + 1) }
    if (e === '-' && count > 0) { setCount(count - 1) }
  }

  return (
    <div className='add margin-top-small'>
      <div
        className='add-counter'
        value='minus'
        onClick={(e) => changeCount(e.target.innerText)}
        role='button'
      >
        -
      </div>

      <div className='add-counter'>{count}</div>

      <div
        className='add-counter'
        value='plus'
        onClick={(e) => changeCount(e.target.innerText)}
        role='button'
      >
        +
      </div>
      <button className='add-btn btnOrange'>Add to Cart</button>
    </div>
  )
}

export default AddToCart
