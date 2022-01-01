import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../App'

function EarphonesYX1({ slug }) {
  const store = useContext(StoreContext)
  const yx1 = store[7].images.filter((el) => el.slug === slug)[0]

  return (
    <div className='products__yx1 margin-top-small'>
      <div className='products__yx1-left productBox'>
        <img className='products__yx1-left--image' src={yx1.desktop} alt='YX1'></img>
      </div>
      <div className='products__yx1-right productBox'>
        <div className='products__yx1-right--header heading-small'>YX1 Earphones</div>
        <Link className='link' to='/yx1'>
          <button className='products__yx1-content--button btnTransparent margin-top-small'>See product</button>
        </Link>
      </div>
    </div>
  )
}

export default EarphonesYX1
