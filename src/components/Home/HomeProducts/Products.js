/* eslint-disable prefer-template */
import React, { useContext } from 'react'
import { StoreContext } from '../../../App'

function Products() {
  const store = useContext(StoreContext)
  const homeProducts = store.filter((el) => el.slug === 'home')[0].image
  const homeProductsJSX = homeProducts.map((product) => (
    <div className={'homeProducts__item' + product.slug === 'speaker-zx9' ? 'product-height-big' : 'product-height-medium'}>

    </div>
  ))
  return (
    <div className='products'>
      {homeProductsJSX}
    </div>
  )
}

export default Products
