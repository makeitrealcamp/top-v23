import React, { useState } from 'react'

import { getProducts  } from '../services/products'

import Card from '../components/Card'


const HomePage = () => {
  const [products, setProducts] = useState(getProducts())

  return(
    <main className="App-header">
      <h1>Products List</h1>
      {
        products.map(product => (
          <Card key={product.id} product={product} />
        ))
      }
    </main>
  )
}

export default HomePage
