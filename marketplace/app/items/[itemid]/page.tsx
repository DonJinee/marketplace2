import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/ProductDetails";
import { product } from "@/utils/items";

interface IParams {
    itemid?: number
}

const ItemDetails = ({params}: {params: IParams}) => {
    console.log(params)
    return ( 
        <div className="p-4">
            <Container>
                <ProductDetails product={product}/>
            </Container>
        </div>
     )
}
 
export default ItemDetails;

