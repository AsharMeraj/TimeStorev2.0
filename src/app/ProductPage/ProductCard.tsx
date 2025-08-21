import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GetDiscountedPrice} from '../configs/Discount'
import { ProdList } from '../configs/ProdListType'



const ProductCard = ({data}:{data:ProdList}) => {
    return (
        <div className='w-fit m-auto focus:outline-none hover:scale-105 duration-200 cursor-pointer'>
            <Link href={`/AllProducts/${data.id}`} prefetch={false}>
                <Image className='max-[320px]:w-[12rem] w-[14rem] sm:w-[18rem] bg-black/5 border-b-4 border-[var(--primary)] m-auto' alt='' width={600} height={600} src={`${data.Image[0].url}`} />
                <h2 className='max-[320px]:w-[12rem] w-[14rem] sm:w-[16rem] font-semibold text-[1rem] max-[840px]:text-[1rem] mt-4'>
                    {data.Name}
                </h2>
                <div className='flex items-center text-black/[0.7]'>
                {
                
                }
                    <p className='mr-2 text-lg font-medium'>
                        {GetDiscountedPrice(data.Price, 20)}
                    </p>
                    <p className='mr-2 text-base line-through font-medium'>
                        ${data.Price}
                    </p>
                    <p className='ml-auto text-base font-medium text-[var(--primary)]'>
                        20% off
                    </p>
                </div>
            </Link>
        </div >

    )
}

export default ProductCard