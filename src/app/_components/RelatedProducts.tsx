'use client';
import ProductCard from '@/app/ProductPage/ProductCard';
import React from 'react'
import { ProdList } from '../configs/ProdListType';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


type PropType = {
    allproducts: ProdList[]
    singleProduct?: ProdList
}


const RelatedProducts = (props: PropType) => {

    return (
        <section className='grid place-items-center py-8 relative z-0'>
            <main className='flex flex-col gap-12 w-fit'>
                <h2 className='m-auto leading-snug font-bold text-black max-w-[28rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2rem]'>You Might Also Like</h2>
                <Carousel opts={{
                    align: "start",
                }}
                    className=" w-[18rem] sm:w-[25rem] md:w-[40rem] lg:w-[58rem] select-none"
                >
                    <CarouselContent className=''>
                        {props.allproducts?.map((product) => (
                            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 w-fit m-auto cursor-pointer">
                                <ProductCard key={product.id} data={product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer -left-5 md:-left-10 border disabled:bg-transparent disabled:opacity-40  border-black hover:border-none hover:bg-[var(--primary)] hover:text-white'/>
                    <CarouselNext className='cursor-pointer -right-5 md:-right-10 border disabled:bg-transparent disabled:opacity-40  border-black hover:border-none hover:bg-[var(--primary)] hover:text-white'/>
                </Carousel>
            </main>
        </section>
    )
}

export default RelatedProducts