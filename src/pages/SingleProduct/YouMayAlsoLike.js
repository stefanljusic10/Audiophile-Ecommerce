import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../services/data.json'

function YouMayAlsoLike() {
  const { singleProduct } = useParams()
  // filtering similar products to current
  const similarProducts = data.filter((item) => item.slug === singleProduct)[0].others

  const similarProductsBox = similarProducts.map((item) => (
    <div className='similarProducts__box-item'>
      <img className='similarProducts__box-item--image' src={item.image.desktop} alt={item.name}></img>
      <div className='similarProducts__box-item--heading heading-mini margin-top-small'>{item.name}</div>
      <button className='btnOrange margin-top-small'>See Product</button>
    </div>
  ))

  return (
    <div className='similarProducts margin-top-huge'>
      <div className='similarProducts__heading heading-smaller'>You May Also Like</div>
      <div className='similarProducts__box margin-top-medium'>
        {similarProductsBox}
      </div>
    </div>
  )
}

export default YouMayAlsoLike
