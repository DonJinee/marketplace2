import { CartProductType } from "@/app/components/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {toast} from 'react-hot-toast'

type CartContextType = {
    cartTotalQty: number
    cartProducts: CartProductType[] | null
    handleAddProductToCart: (product: CartProductType) => void
    handleRemoveProductFromCart: (product: CartProductType) => void
    handleCartQtyIncrease: (product: CartProductType) => void
    handleCartQtyDecrease: (product: CartProductType) => void
    handClearCart: () => void
}


export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any
}
export const CartContextProvider = (props: Props) => {

    const [cartTotalQty, setCartTotalQty] = useState(10)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('marketPlaceItems')
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)
 
        setCartProducts(cProducts)
    }, [])



    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }

            toast.success('Product added to cart')
            localStorage.setItem('marketPlaceItems', JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if(cartProducts) {
            const filteredProducts = cartProducts.filter
            ((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)
            toast.success('Product Removed')
            localStorage.setItem('marketPlaceItems', 
            JSON.stringify(filteredProducts))
        }
    }, [])

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updatedCart;
        
        if (product.quantity === 99) {
            return toast.error("Ooops! Maximum reached")
        }

        if(cartProducts) {
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
                )
                if(existingIndex > -1) {
                    updatedCart[existingIndex].quantity = ++ updatedCart[existingIndex].quantity
                    setCartProducts(updatedCart)

                    localStorage.setItem('marketPlaceItems', JSON.stringify(updatedCart))
                }
        }
    }, [cartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        let updatedCart;
        
        if (product.quantity === 1) {
            return toast.error("Ooops! Minimum reached")
        }

        if(cartProducts) {
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
                )
                if(existingIndex > -1) {
                    updatedCart[existingIndex].quantity = -- updatedCart[existingIndex].quantity
                    setCartProducts(updatedCart)

                    localStorage.setItem('marketPlaceItems', JSON.stringify(updatedCart))
                }
        }
    }, [cartProducts])

    const handClearCart = useCallback(() => {
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem('marketPlaceItems', JSON.stringify(null))
    }, [cartProducts])

    const value = {
       cartTotalQty,
       cartProducts,
       handleAddProductToCart,
       handleRemoveProductFromCart,
       handleCartQtyIncrease,
       handleCartQtyDecrease,
       handClearCart,
    }
    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }

    return context
}