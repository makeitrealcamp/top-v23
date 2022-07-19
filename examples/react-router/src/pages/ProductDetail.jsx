import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getProduct } from '../services/products'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [params,] = useSearchParams()

  const product = getProduct(id)

  return(
    <div>
      <pre>
        {JSON.stringify(product, null, 2)}
      </pre>

      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetailPage
