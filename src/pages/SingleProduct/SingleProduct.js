import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../App'
import ButtonBack from '../../components/Button/ButtonBack'
import ProductPreview from '../SelectedCategory/ProductPreview'
import Addition from './Addition'
import Gallery from './Gallery'
import YouMayAlsoLike from './YouMayAlsoLike'

function SingleProduct() {
  const { singleProduct } = useParams()
  const data = useContext(DataContext)
  const product = data.filter((content) => content.slug === singleProduct)[0]

  return (
    <div className='single'>
      <ButtonBack />
      <ProductPreview content={product} />
      <Addition content={product} />
      <Gallery content={product} />
      <YouMayAlsoLike />
    </div>
  )
}

export default SingleProduct
