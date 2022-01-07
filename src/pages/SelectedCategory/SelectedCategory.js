import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../../App'
import ProductContent from './ProductContent'
import PreviewImage from './PreviewImage'

function SelectedCategory() {
  const store = useContext(StoreContext)
  const { selectedCategory } = useParams()
  const navigate = useNavigate()
  const categoryRoutes = ['headphones', 'speakers', 'earphones']

  useEffect(() => {
    if (categoryRoutes.indexOf(selectedCategory) === -1) {
      // should navigate to error page
      navigate('/')
    }
  }, [])

  const products = store.map((product, index) => {
    if (product.category === selectedCategory) {
      if (index % 2 === 1) {
        return (
          <div className='selected__category' key={product.id}>
            <PreviewImage image={product.image.desktop} />
            <ProductContent content={product} />
          </div>
        )
      }
      return (
        <div className='selected__category' key={product.id}>
          <ProductContent content={product} />
          <PreviewImage image={product.image.desktop} />
        </div>
      )
    }
  })

  return (
    <div className='selected'>
      <div className='selected-heading heading-medium'>
        {selectedCategory}
      </div>
      {products}
    </div>
  )
}

export default SelectedCategory
