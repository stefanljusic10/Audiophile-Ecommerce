import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function SpeakerZX7({ slug }) {
  const store = useContext(StoreContext)
  const zx7 = store[7].images.filter((el) => el.slug === slug)[0]

  return (
    <div className='products__zx7 productBox margin-top-small'>
      <img className='products__zx7-image' src={zx7.desktop} alt='ZX7'></img>
      <div className='products__zx7-content'>
        <div className='products__zx7-content--header heading-small'>ZX7 Speaker</div>
        <button className='products__zx7-content--button btnTransparent margin-top-small'>See product</button>
      </div>
    </div>
  )
}

export default SpeakerZX7