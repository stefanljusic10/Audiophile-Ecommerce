import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function Categories() {
  const store = useContext(StoreContext)
  const categoriesImages = store[6].image
  const arrowRight = store[7].arrowRight.desktop

  const categoriesJSX = categoriesImages.map((cat) => (
    <div className='categories__box' key={cat.name}>
      <div className='categories__item'>
        <img className='categories__item-image' src={cat.desktop} alt='cat'></img>
        <h3 className='categories__item-header'>Headphones</h3>
        <button className='categories__item-button margin-top-small'>
          Shop
          &ensp;
          <img className='categories__item-arrow' src={arrowRight} alt='ARROW'></img>
        </button>
      </div>
    </div>
  ))

  return (
    <div className='categories'>
      {categoriesJSX}
    </div>
  )
}

export default Categories
