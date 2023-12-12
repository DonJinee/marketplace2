import products from '../utils/market-items.json' 
import Container from './components/Container';
import Image from 'next/image';
import ProductsCard from './components/products/ProductsCard';
import ProductsCategories from './components/products/ProductCategories';
import Banner from './components/banner/Banner';

interface Products {
  photoid: number
  url: string;
  name: string;
}


export default async function Home() {  

  return (
      <div className="p-4 ">
        <Container>
          <Banner/>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {
              products.map((product: Products) => {
                return(<div key={product.photoid}>
                  <ProductsCategories data={product}/>
                </div>)
              } )
            }
          </div>
        </Container>
      </div>
  )
}
