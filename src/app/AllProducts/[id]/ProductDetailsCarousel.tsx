'use client';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProdList } from '@/app/configs/ProdListType';
type PropType = {
  product: ProdList
  key: number
}

const ProductDetailsCarousel = (props: PropType) => {
  const thumb: string[] = []
  props.product.Image.map((item) =>
    thumb.push(item.url)
  )


  return (
    <>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'>
        {
          thumb?.map((url) => {
            return <img key={props.product.id} className='bg-black/5' src={url} alt='' width={600} height={600} />

          })
        }
      </Carousel>
    </>
  )
}

export default ProductDetailsCarousel