'use client'

import { CartProductType } from "../ProductDetails"

interface SetQtyProps {
    cartCounter?: boolean
    cartProduct: CartProductType
    handleQtyIncrease: () => void
    handleQtyDecrease: () => void
}

const btnStyles = 'border-[1.2px] border-green-300 px-2 rounded'

const SetQuantity: React.FC<SetQtyProps> = ({cartProduct, cartCounter,handleQtyIncrease, handleQtyDecrease}) => {
    return ( 
    <div>
        {cartCounter ? null: <div className="font-semibold">QUANTITY:</div>}
        <div className="flex gap-4 items-center text-base">
            <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
            <div>{cartProduct.quantity}</div>
            <button className={btnStyles} onClick={handleQtyIncrease}>+</button>
        </div>
    </div> );
}
 
export default SetQuantity;