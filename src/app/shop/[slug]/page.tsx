import React from 'react'
import ProductCard from '@/app/ProductPage/ProductCard'
import { FetcherProducts } from '@/app/configs/FetcherProducts'

interface ParamsType {
    params: Promise<{slug: string}> 
}

const page = async ({ params }: ParamsType) => {
    const allProducts = await FetcherProducts()
    const {slug} = await params
    const productFunction = allProducts.filter((items) => {
        return items.Category === slug
    })
    return (

            <section className='flex justify-center'>
                <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-[4rem] gap-[3rem]'>
                    {
                        productFunction?.map((item) => {
                            return <ProductCard key={item.id} data={item} />
                        })
                    }

                </main>
            </section >
    )
}

export default page


