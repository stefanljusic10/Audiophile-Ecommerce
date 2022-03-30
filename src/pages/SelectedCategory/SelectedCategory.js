import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../../App'
import ButtonBack from '../../components/Button/ButtonBack'
import ProductPreview from './ProductPreview'

function SelectedCategory() {
  const data = useContext(DataContext)
  const { selectedCategory } = useParams()
  const navigate = useNavigate()
  const categoryRoutes = ['headphones', 'speakers', 'earphones']

  useEffect(() => {
    if (categoryRoutes.indexOf(selectedCategory) === -1) {
      // should navigate to error page
      navigate('/')
    }
  }, [])

  const products = data.map((product, index) => {
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
      <div className='selected-products'>
        {products}
      </div>
    </div>
  )
}

export default SelectedCategory
