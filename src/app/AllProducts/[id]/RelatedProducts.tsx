'use client';
import ProductCard from '@/app/ProductPage/ProductCard';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProdList } from '@/app/configs/ProdListType';

type PropType = {
    singleproducts: ProdList
    allproducts: ProdList[]
}



const Responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1
    }
}

const RelatedProducts = (props: PropType) => {
    const similarProducts = props.allproducts?.filter((item) => {
        return item.Category.toLowerCase() === props.singleproducts?.Category.toLowerCase()
    })
    return (
        <section className='w-full grid place-items-center py-8 max-[767px]:mt-[4rem] z-0 relative'>
            <main className='flex flex-col gap-12'>
                <h2 className='m-auto leading-snug font-bold text-black max-w-[28rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2rem]'>You Might Also Like</h2>
                <Carousel
                    responsive={Responsive}
                    containerClass='w-[60rem] max-[1089px]:w-[60rem] max-lg:w-[40rem] max-md:max-w-[25rem] max-[445px]:w-[20rem] max-[369px]:w-[16rem] max-[369px]:m-auto'
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    customTransition='transform 300ms ease-in-out'
                    transitionDuration={1000}>
                    {
                        similarProducts?.map((product) => (
                            <ProductCard key={product.id} data={product} />
                        ))
                    }
                </Carousel>
            </main>
        </section>
    )
}

export default RelatedProducts