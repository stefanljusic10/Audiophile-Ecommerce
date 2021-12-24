import React from 'react'
import EarphonesYX1 from './EarphonesYX1'
import SpeakerZX7 from './SpeakerZX7'
import SpeakerZX9 from './SpeakerZX9'

function Products() {
  return (
    <div className='products'>
      <SpeakerZX9 slug='speaker-zx9' />
      <SpeakerZX7 slug='speaker-zx7' />
      <EarphonesYX1 slug='earphones-yx1' />
    </div>
  )
}

export default Products
