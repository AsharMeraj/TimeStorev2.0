import React from 'react'
import ProductCard from '../ProductPage/ProductCard'
import { ProdList } from '../configs/ProdListType'
import { FetcherProducts } from '../configs/FetcherProducts';


const page = async () => {
  const allProducts = await FetcherProducts()
  return (
    <section className='flex justify-center'>
      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-[4rem] gap-[3rem]'>
        {
          allProducts.map((product: ProdList) => (
            <ProductCard key={product.id} data={product} />
          ))
        }

      </main>
    </section>
  )
}

export default page
