import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../App'
import ButtonBack from '../../components/Button/ButtonBack'
import ProductPreview from '../SelectedCategory/ProductPreview'
import Addition from './Addition'
import Gallery from './Gallery'

function SingleProduct() {
  const { singleProduct } = useParams()
  const store = useContext(StoreContext)
  const product = store.filter((content) => content.slug === singleProduct)[0]

  return (
    <div className='single'>
      <ButtonBack />
      <ProductPreview content={product} />
      <Addition content={product} />
      <Gallery content={product} />
    </div>
  )
}

export default SingleProduct
