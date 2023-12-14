import Container from '../components/Container'
import HomeBanner from '../components/HomeBanner'
import { products } from '@/utils/products'
import ProductsCard from '../components/products/ProductsCard'
const page = () => {
  return (
    <div>
      <div className='p-8'>
        <Container>
          <div>
            <HomeBanner/>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
            {products.map((product: any) => {
              return (
                <div key={product.id}>
                <ProductsCard data={product}/>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    
    </div>
  )
}

export default page
