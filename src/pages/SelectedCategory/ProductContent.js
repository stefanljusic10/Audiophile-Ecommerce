import React from 'react'
import { Link } from 'react-router-dom'

function ProductContent({ content }) {
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
      <Link className='link' to={content.slug}>
        <button className='btnOrange margin-top-small'>
          View more
        </button>
      </Link>
    </div>
  )
}

export default ProductContent
