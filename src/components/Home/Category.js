import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function Category({ cat }) {
  const store = useContext(StoreContext)
  const arrowRight = store[6].arrowRight.desktop

  return (
    <div className='categories__box' key={cat.name}>
      <div className='categories__item'>
        <img className='categories__item-image' src={cat.desktop} alt='cat'></img>
        <h3 className='categories__item-header'>Headphones</h3>
        <button className='categories__item-button margin-top-small'>
          Shop &ensp;
          <img className='categories__item-arrow' src={arrowRight} alt='arrow'></img>
        </button>
      </div>
    </div>
  )
}

export default Category
