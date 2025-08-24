'use client';
import React, { useMemo, useState } from 'react'
import CartCard from './CartCard'
import { useAppSelector } from '../Store/hooks'
import { RootState } from '../Store/store';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../configs/PaymentRequest';
import Image from 'next/image';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);


const CartPage = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { cartItems } = useAppSelector((state: RootState) => state.cart)

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, val) => total + val.data.Price, 0)
    }, [cartItems])

    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/create-payment", {
                products: cartItems,
            });

            if (!res.stripeSession) {
                throw new Error("No stripeSession in response");
            }

            console.log(res);
            await stripe?.redirectToCheckout({
                sessionId: res.stripeSession,
            });
            setLoading(false)
            if (loading === true) {
                console.log("loading is true")
            }
        } catch (error) {
            setLoading(false);
            console.error("Error in handlePayment:", error);
        }
    };
    return (
        <>
            {cartItems.length > 0 && (
                <section className='w-full justify-between px-6  py-6'>
                    <h1 className='text-[1.5rem] w-[75rem] max-[1255px]:w-full font-bold mx-auto mb-8 max-[558px]:w-fit'>Shopping Cart</h1>
                    <main className='flex w-[75rem] max-[1255px]:w-full m-auto max-[920px]:flex-col justify-between'>
                        <CartCard />
                        <main className='flex flex-col gap-4'>
                            <h1 className='w-fit font-bold text-[1.2rem]'>Summary</h1>
                            <section className='bg-black/5 w-[25rem] flex flex-col gap-8 max-[558px]:gap-4 p-8 rounded-xl h-fit max-[920px]:m-auto max-[920px]:w-[46rem] max-[788px]:w-full max-[558px]:max-w-full'>
                                <div className='flex w-full justify-between'>
                                    <h2 className='text-[1rem] text-[var(--primary)] font-semibold'>SUBTOTAL:</h2>
                                    <h2 className='text-[1.1rem]'>${totalPrice.toFixed(1)}</h2>
                                </div>
                                <p className='max-[590px]:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto libero rerum, ad consequuntur labore fuga similique, qui </p>
                                <div className='cursor-pointer w-full m-auto'>
                                    <button onClick={handlePayment} className={`w-full cursor-pointer active:scale-95 bg-[var(--primary)] text-white font-semibold sm:text-base text-sm sm:px-[2rem] px-[1.5rem] sm:py-[1rem] py-[1rem] flex items-center ${loading ? "justify-between" : "justify-center"} flex-row`}>
                                        <h2 className='sm:whitespace-nowrap'>PROCEED TO CHECKOUT</h2>
                                        {
                                            loading? <Image width={25} height={25} src='/spinner.svg' alt='loading' />: ""
                                        }
                                    </button>
                                </div>
                            </section>
                        </main>
                    </main>
                </section >
            )}
            {cartItems.length < 1 && <section className='w-full h-[calc(100vh-6rem)] grid place-items-center px-6'>
                <h2 className='w-fit text-[2rem] font-bold text-center text-[var(--primary)]'>Shopping Cart is empty</h2>
            </section>}
        </>

    )
}

export default CartPage