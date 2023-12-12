'use client'

import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductsCategoryProps {
    data: any;
}

const ProductsCategories:React.FC<ProductsCategoryProps> = ({data}) => {
    const router = useRouter()
    return ( 
        <div  className="col-span-1 border-[1.2px]
        border-green-200 bg-green-50 round-sm transition
        hover:scale-105 text-center text-sm w-[160px] h-[180px] sm:w-[170px] sm:h-[190px] md:w-[200px] md:h-[210px]
        ">
            <div key={data.photoid} className="aspect-square overflow-hidden relative w-full">
                <div className="border-2 border-solid">
                    <Image
                    style={{ width: '100%', height: '100px' }}
                    width={200}
                    height={200}
                    src={data.url}
                    alt={data.name}
                    />
                </div>
                <div className="p-2">
                <div className="md:my-4 sm:m-[4px]">{data.name}</div>
                <button onClick={() => router.push(`/items/${data.photoid}`)} className="p-1 md:p-2 text-[.8rem] border-solid border-green-200 
                bg-green-800 text-white rounded cursor-pointer
                sm:text-xs sm:m-1 hover:bg-green-600">
                    See Details Here
                </button>
            </div>
            </div>
        </div>
     );
}
 
export default ProductsCategories;