import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function Categories() {
  const store = useContext(StoreContext)
  const categoriesImages = store[6].images

  categoriesImages.map((cat) => console.log(cat.desktop))

  // const categoriesJSX = categoriesImages.map((cat) => (
  //   <div className='categories__item' key={cat.desktop}>
  //     <img className='categories__item-image' src={cat.desktop} alt='CATEGORY'></img>
  // eslint-disable-next-line max-len
  //     <img className='categories__item-image' src='../../assets/shared/desktop/image-best-gear.jpg' alt='CATEGORY'></img>
  //   </div>
  // ))

  return (
    <div className='categories'>
      {/* {categoriesJSX} */}
      <img src={require(`${categoriesImages[0].desktop}`)} alt='cat'></img>
    </div>
  )
}

export default Categories
