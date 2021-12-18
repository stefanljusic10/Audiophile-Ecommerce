import React, { useContext } from 'react'
import { StoreContext } from '../../App'
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg'

function Categories() {
  const store = useContext(StoreContext)
  // eslint-disable-next-line no-unused-vars
  const categoriesImages = store[6]

  return (
    <div className='categories'>
      <div className='categories__box'>
        <div className='categories__item'>
          <img className='categories__item-image' src={headphones} alt='Category'></img>
          <h3 className='categories__item-header'>Headphones</h3>
          <button className='categories__item-button margin-top-small'>
            Shop
            &ensp;
            <img className='categories__item-arrow' src={arrowRight} alt='ARROW'></img>
          </button>
        </div>
      </div>
      <div className='categories__box'>
        <div className='categories__item'>
          <img className='categories__item-image' src={speakers} alt='Category'></img>
          <h3 className='categories__item-header'>Speakers</h3>
          <button className='categories__item-button margin-top-small'>
            Shop
            &ensp;
            <img className='categories__item-arrow' src={arrowRight} alt='ARROW'></img>
          </button>
        </div>
      </div>
      <div className='categories__box'>
        <div className='categories__item'>
          <img className='categories__item-image' src={earphones} alt='Category'></img>
          <h3 className='categories__item-header'>Earphones</h3>
          <button className='categories__item-button margin-top-small'>
            Shop
            &ensp;
            <img className='categories__item-arrow' src={arrowRight} alt='ARROW'></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
