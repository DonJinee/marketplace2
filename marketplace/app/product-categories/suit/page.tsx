import Container from "@/app/components/Container";
import marketplaceItems from '@/utils/marketplaceitems'
import ProductsCard from "@/app/components/products/ProductsCard";
import SpecificProduct from "@/app/components/products/SpecificProducts";


const Suit = () => {
    
    return ( 
        <div>
      <div className='p-8'>
        <Container>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
            {marketplaceItems.map((marketplaceItem: any) => {
              return (
                <SpecificProduct data={marketplaceItem}/>
              )
            })}
          </div>
        </Container>
      </div>
        </div>
     );
}
 
export default Suit;