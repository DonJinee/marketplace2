import Container from "@/app/components/Container";
import marketplaceItems from '@/utils/marketplaceitems'
import ProductsCard from "@/app/components/products/ProductsCard";
import SpecificProduct from "@/app/components/products/SpecificProducts";
import Image from 'next/image'
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";

const Sunglasses = () => {
    
    return ( 
        <div>
      <div className='p-8'>
        <Container>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
            {marketplaceItems.map((marketplaceItem: any) => {
              return (
                <div>
                <div>{marketplaceItem.sport.name}</div>
                <div key={marketplaceItem.sport.id} className="col-span-1 cursor-pointer border-[1.2px]
    border-slate-200 bg-slate-50 round-sm p-2 transition
    hover:scale-105 text-center text-sm">
        <div className="
        flex flex-col items-center
        w-full gap-1
        ">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image
                fill
                src={marketplaceItem.sport.images[0].image}
                alt={marketplaceItem.sport.name}
                className="w-full h-full object-contain"
                />
            </div>
            <div className="mt-4">
                {truncateText(marketplaceItem.sport.name)}
            </div>
            <div>
                {/* <Rating value={productRating}/> */}
            </div>
            <div>{marketplaceItem.sport.reviews.length} reviews</div>
            <div className="font-semibold">{formatPrice(marketplaceItem.sport.price)}</div>
        </div>
    </div>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
        </div>
     );
}
 
export default Sunglasses;