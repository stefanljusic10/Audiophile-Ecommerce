import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAll } from '../../redux/counterSlice'

function ButtonRemoveAll() {
  const dispatch = useDispatch()
  return (
    <button
      className='cartPortal-btn btnRemoveAll'
      onClick={() => dispatch(removeAll())}
    >
      Remove All
    </button>
  )
}

export default ButtonRemoveAll
