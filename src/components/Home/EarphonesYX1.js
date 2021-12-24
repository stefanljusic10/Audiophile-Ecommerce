import React, { useContext } from 'react'
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
        <button className='products__yx1-content--button btnTransparent margin-top-small'>See product</button>
      </div>
    </div>
  )
}

export default EarphonesYX1
