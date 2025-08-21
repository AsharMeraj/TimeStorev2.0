'use client';
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/Store/hooks'
import { addToCart } from '@/app/Store/cartSlice'
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@/app/_components/Button/Button';
import { ProdList } from '@/app/configs/ProdListType';
type propType = {
    SingleProduct: ProdList
}

const SizeSelect = (props: propType) => {
    const [sizeSelection, setSizeSelection] = useState<string>();
    const [showError, setShowError] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.cart.cartItems)
    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            })
    }


    const setSize = (size: string) => {
        setSizeSelection(size);
        if (showError === true) {
            setShowError(false)
        }
    };
    const DecideError = () => {
        if (sizeSelection === undefined) {
            setShowError(true)
        }
        else {
            dispatch(addToCart({data: props.SingleProduct, quantity: 1, selectedSize: sizeSelection, singlePrice: props.SingleProduct.Price}))
            notify()
        }
    }
    return (
        <main className='flex flex-col min-[369px]:w-[18rem] gap-6'>
            <div className='flex justify-between'>
                <h2 className='text-[var(--primary)]'>Select Size</h2>
                <h2 className='text-black/60'>Select Guide</h2>
            </div>
            <div className='grid grid-cols-3 gap-3'>
            {
                    props.SingleProduct.sizeArray.map((size, i) => {
                        return (
                            size.enabled ? (
                                <div key={i} onClick={() => setSize(size.size)} className={`border rounded-md text-center py-1 font-medium hover:border-[var(--primary)] cursor-pointer ${sizeSelection === size.size && 'border-2 border-[var(--primary)]'}`}>
                                    {size.size}
                                </div>
                            ) : (
                                <div key={i} className='border rounded-md text-center py-1 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    {size.size}
                                </div>
                            )
                        );
                    })
                }
            </div>
            {showError && <div className='text-red-600 mt-1'>Size selection is required</div>}
            {/* Size Selection End */}
            <div onClick={() => DecideError()} className=' w-fit'>
                <Button>ADD TO CART</Button>
            </div>
        </main>
    )
}

export default SizeSelect