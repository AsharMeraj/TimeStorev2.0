import React from 'react';
import ProductDetailsCarousel from './ProductDetailsCarousel';
import RelatedProducts from './RelatedProducts';
import SizeSelect from './SizeSelect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProdList } from '@/app/configs/ProdListType';
import { GetDiscountedPrice } from '@/app/configs/Discount';
import { FetcherProducts } from '@/app/configs/FetcherProducts';

interface ProductPageProps {
  params: Promise<{ id: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params

  const allProducts = await FetcherProducts()

  const productFunction = (id: number) => {
    return allProducts.filter((product: ProdList) => (
      product.id === +id
    ))
  }
  const SpecificProduct = productFunction(+id)
  const singleProduct: ProdList = SpecificProduct[0]

  return (
    <>
      <ToastContainer />
      <div className='flex w-full md:py-20 justify-center'>
        <div className='flex gap-12 items-center lg:items-start flex-col mx-6 max-md:mx-6 min-[1400px]:mx-[7.5rem] lg:flex-row'>
          {/* --------left column start-------- */}
          <div className='grid w-[20rem] max-[368px]:w-full sm:w-[30rem] md:w-[40rem] min-[1700px]:w-[50rem] min-[1400px]:w-[40rem]'>
            <ProductDetailsCarousel key={singleProduct.id} product={singleProduct} />
          </div>
          {/* --------left column end-------- */}
          {/* --------right column start-------- */}
          <div>
            <main className='flex flex-col gap-8 py-3'>
              {/* Headings Start */}
              <div className='flex flex-col g'>
                <h1 className='leading-snug font-bold text-black max-w-[28rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2rem]'>{singleProduct.Name}</h1>
                <p className='font-semibold max-w-[28rem] text-[1.2rem] sm:text-[1.4rem] text-black/60'>{singleProduct.Category}</p>
              </div>
              {/* Headings End */}
              {/* Price And Other Text Start */}
              <div className='flex flex-col'>
                <h2 className='text-[var(--primary)] font-semibold text-[1.2rem]'>MRP : $ {GetDiscountedPrice(singleProduct.Price, 20)}</h2>
              </div>
              {/* Price And Other Text End */}
              {/* Size Selection Start */}
              <SizeSelect SingleProduct={singleProduct} />
            </main>
          </div>
          {/* --------right column end-------- */}
        </div>
      </div>
      <RelatedProducts singleproducts={singleProduct} allproducts={allProducts} />
    </>
  );
};

export default ProductPage;
