'use client'

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetColor from "./products/SetColor";
import SetQuantity from "./products/SetQantity";

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg:SelectedImgType,
    quantity: number,
    price: number
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2"/>
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            brand: product.brand,
            selectedImg: {...product.images[0]},
            quantity: 1,
            price: product.price
    }
    )

    const productRating = product.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) / product.reviews.length

const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => {
        return {...prev, selectedImg: value}
    })
}, [cartProduct.selectedImg])

const handleQtyIncrease= useCallback(() => {
    if(cartProduct.quantity === 99) {
        return
    }
    setCartProduct((prev) => {
        return{...prev, quantity: ++prev.quantity}
    })
}, [cartProduct])
const handleQtyDecrease= useCallback(() => {
    if(cartProduct.quantity === 1) {
        return
    }
    setCartProduct((prev) => {
        return{...prev, quantity: --prev.quantity}
    })
}, [cartProduct])


    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2
        gap-12">
            <div>Images</div>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-courgette font-medium
                text-green-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly/>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">
                    {product.description}
                </div>
                <Horizontal/>
                <div>
                    <span className="font-semibold">CATEGORY:</span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span> {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
                    {product.inStock ? 'In stock' : 'Out of stock'}
                </div>
                <Horizontal/>
                <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect}/>
                <Horizontal/>
                <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                <div>quantity</div>
                <Horizontal/>
                <div>add to cart</div>
            </div>
        </div>
     );
}
 
export default ProductDetails;