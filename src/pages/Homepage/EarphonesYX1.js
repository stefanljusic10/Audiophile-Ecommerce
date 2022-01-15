import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'

function EarphonesYX1() {
  const navigate = useNavigate()
  const data = useContext(DataContext)
  const product = data[7].images[2]

  return (
    <div className='products__yx1 margin-top-small'>
      <div className='products__yx1-left productBox'>
        <img className='products__yx1-left--image' src={product.desktop} alt='YX1'></img>
      </div>
      <div className='products__yx1-right productBox'>
        <div className='products__yx1-right--header heading-small'>YX1 Earphones</div>
        <button
          className='products__yx1-content--button btnTransparent margin-top-small'
          onClick={() => navigate(`${product.category}/${product.slug}`)}
        >
          See product
        </button>
      </div>
    </div>
  )
}

export default EarphonesYX1
