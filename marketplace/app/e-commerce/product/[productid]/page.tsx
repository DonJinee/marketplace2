import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/ProductDetails";
import { product } from "@/utils/product";

interface IParams {
    productId?: string
}

const Products = ({params}:{params: IParams}) => {
    console.log("params", params)

    return ( 
        <div className="p-4">
            <Container>
                <ProductDetails product={product}/>
            </Container>
        </div>
     );
}
 
export default Products;