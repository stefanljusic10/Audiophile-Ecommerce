import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../App'

function SpeakerZX7() {
  const navigate = useNavigate()
  const store = useContext(StoreContext)
  const product = store[7].images[1]

  return (
    <div className='products__zx7 productBox margin-top-small'>
      <img className='products__zx7-image' src={product.desktop} alt='ZX7'></img>
      <div className='products__zx7-content'>
        <div className='products__zx7-content--header heading-small'>ZX7 Speaker</div>
        <button
          className='products__zx7-content--button btnTransparent margin-top-small'
          onClick={() => navigate(`${product.category}/${product.slug}`)}
        >
          See product
        </button>
      </div>
    </div>
  )
}

export default SpeakerZX7