import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddToCart from '../SingleProduct/AddToCart'

function ProductContent({ content }) {
  const navigate = useNavigate()
  const { singleProduct } = useParams()

  if (typeof singleProduct !== 'undefined') {
    return (
      <div className='selected__content'>
        <div className='selected__content-heading heading-small'>
          {content.name}
        </div>
        <div className='selected__content-description text margin-top-small'>
          {content.description}
        </div>
        <div className='selected__content-price margin-top-small'>
          $ {content.price}
        </div>
        <AddToCart />
      </div>
    )
  }

  return (
    <div className='selected__content'>
      <div className='selected__content-heading heading-small'>
        {content.name}
      </div>
      <div className='selected__content-description text margin-top-small'>
        {content.description}
      </div>
      <div className='selected__content-price margin-top-small'>
        $ {content.price}
      </div>
      <button
        className='btnOrange margin-top-small'
        onClick={() => navigate(content.slug)}
      >
        See product
      </button>
    </div>
  )
}

export default ProductContent
