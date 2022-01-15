import React, { useContext } from 'react'
import { DataContext } from '../../App'

function Category({ cat }) {
  const data = useContext(DataContext)
  const arrowRight = data[6].arrowRight.desktop

  return (
    <div className='categories__box' key={cat.name}>
      <div className='categories__item'>
        <img className='categories__item-image' src={cat.desktop} alt='cat'></img>
        <h3 className='categories__item-header'>{cat.name}</h3>
        <button className='btnCategory margin-top-small'>
          Shop &ensp;
          <img className='categories__item-arrow' src={arrowRight} alt='arrow'></img>
        </button>
      </div>
    </div>
  )
}

export default Category
