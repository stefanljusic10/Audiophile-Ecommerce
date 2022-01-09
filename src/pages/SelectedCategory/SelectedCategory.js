import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../App'
import ButtonBack from '../../components/Button/ButtonBack'
import ProductPreview from './ProductPreview'

function SelectedCategory() {
  const store = useContext(StoreContext)
  const { selectedCategory } = useParams()
  const categoryRoutes = ['headphones', 'speakers', 'earphones']

  useEffect(() => {
    if (categoryRoutes.indexOf(selectedCategory) === -1) {
      // should navigate to error page
      navigate('/')
    }
  }, [])

  const products = store.map((product, index) => {
    if (product.category === selectedCategory) {
      return (
        <div key={product.id}>
          <ProductPreview
            content={product}
            index={index}
          />
        </div>
      )
    }
  })

  return (
    <div className='selected'>
      <div className='selected-heading heading-medium'>
        {selectedCategory}
      </div>
      <ButtonBack />
      {products}
    </div>
  )
}

export default SelectedCategory
