import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../App'
import Category from './Category'

function Categories() {
  const data = useContext(DataContext)
  const categoriesImages = data[6].categories

  const categories = categoriesImages.map((cat) => (
    <div key={cat.name}>
      <Link className='link' to={cat.name}>
        <Category cat={cat} />
      </Link>
    </div>
  ))

  return (
    <div className='categories'>
      {categories}
    </div>
  )
}

export default Categories
