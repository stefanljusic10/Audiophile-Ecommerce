import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonBack() {
  const navigate = useNavigate()
  return (
    <button
      className='single-btnBack btnGoBack'
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  )
}

export default ButtonBack
