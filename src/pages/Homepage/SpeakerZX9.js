import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'

function SpeakerZX9() {
  const navigate = useNavigate()
  const data = useContext(DataContext)
  const product = data[7].images[0]

  return (
    <div className='products__zx9 productBox'>
      <div className='products__zx9-left'>
        <img className='products__zx9-left--circles' src={product.circles} alt='CIRCLES'></img>
        <img className='products__zx9-left--image' src={product.desktop} alt='ZX9'></img>
      </div>
      <div className='products__zx9-right'>
        <div className='products__zx9-right--header heading'>ZX9<br></br>Speaker</div>
        <div className='products__zx9-right--text margin-top-small'>ZX9<br></br>Upgrade to premium speakers that are<br></br>phenomenally built to deliver truly remarkable<br></br>sound.</div>
        <button
          className='products__zx9-right--button btnBlack margin-top-small'
          onClick={() => navigate(`${product.category}/${product.slug}`)}
        >
          See product
        </button>
      </div>
    </div>
  )
}

export default SpeakerZX9
