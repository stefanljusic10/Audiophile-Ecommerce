/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/counterSlice'
import data from '../../services/data.json'

function AddToCart({ product }) {
  const [countItem, setCountItem] = useState(0)
  const dispatch = useDispatch()

  const changeCount = (e) => {
    if (e === '+') { setCountItem(countItem + 1) }
    if (e === '-' && countItem > 0) { setCountItem(countItem - 1) }
  }

  const addItem = async (itemName) => {
    const filterAddedItem = await data.filter((item) => item.name === itemName)[0]
    const itemInCart = { itemInCart: filterAddedItem, count: countItem }
    dispatch(addToCart(itemInCart))
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
        onClick={() => addItem(product.name)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCart
