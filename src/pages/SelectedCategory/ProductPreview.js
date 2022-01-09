import React from 'react'
import ProductContent from './ProductContent'
import ProductImage from './ProductImage'

function ProductPreview({ content, index }) {
  if (index % 2 === 0) {
    return (
      <div className='selected__category'>
        <ProductContent content={content} />
        <ProductImage image={content.image.desktop} />
      </div>
    )
  }
  return (
    <div className='selected__category'>
      <ProductImage image={content.image.desktop} />
      <ProductContent content={content} />
    </div>
  )
}

export default ProductPreview
