import { useRouter } from 'next/router'

const ProductsHome = (props) => {
  const router = useRouter()
  const { productId } = router.query

  return(
    <div>
      <h1>Product {productId}</h1>
    </div>
  )
}

export default ProductsHome
