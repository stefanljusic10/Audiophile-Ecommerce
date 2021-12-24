import React, { useContext } from 'react'
import { StoreContext } from '../../App'
import Category from './Category'

function Categories() {
  const store = useContext(StoreContext)
  const categoriesImages = store[6].categories
  const categories = categoriesImages.map((cat) => (
    <div key={cat.name}>
      <Category cat={cat} />
    </div>
  ))

  return (
    <div className='categories'>
      {categories}
    </div>
  )
}

export default Categories
