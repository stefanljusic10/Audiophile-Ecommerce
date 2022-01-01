import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../App'

function SpeakerZX9({ slug }) {
  const store = useContext(StoreContext)
  const zx9 = store[7].images.filter((el) => el.slug === slug)[0]

  return (
    <div className='products__zx9 productBox'>
      <div className='products__zx9-left'>
        <img className='products__zx9-left--circles' src={zx9.circles} alt='CIRCLES'></img>
        <img className='products__zx9-left--image' src={zx9.desktop} alt='ZX9'></img>
      </div>
      <div className='products__zx9-right'>
        <div className='products__zx9-right--header heading'>ZX9<br></br>Speaker</div>
        <div className='products__zx9-right--text margin-top-small'>ZX9<br></br>Upgrade to premium speakers that are<br></br>phenomenally built to deliver truly remarkable<br></br>sound.</div>
        <Link className='link' to='/zx9'>
          <button className='products__zx9-right--button btnBlack margin-top-small'>See product</button>
        </Link>
      </div>
    </div>
  )
}

export default SpeakerZX9
