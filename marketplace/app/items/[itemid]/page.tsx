import Container from "@/app/components/Container";
import ListRating from "@/app/components/ListRating";
import ProductDetails from "@/app/components/ProductDetails";
import { product } from "@/utils/items";

// import { product } from "@/utils/product";
interface IParams {
    productId?: number
}

const ItemDetails = ({params}: {params: IParams}) => {
//    const product = products.find((item) => item.id === params?.productId)
//    if (!product) {
//     // Handle the case where the product is not found based on the given id.
//     return <div>Product not found</div>;
//   }
    return ( 
        <div className="p-4">
            <Container>
                <ProductDetails product={product}/>
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <ListRating product={product}/>
                </div>
            </Container>
        </div>
     )
}
 
export default ItemDetails;

