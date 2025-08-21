import React from 'react'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import { useAppSelector } from '../Store/hooks'
import { RootState } from '../Store/store'
import { useAppDispatch } from '../Store/hooks'
import { removeFromCart, updateCart } from '../Store/cartSlice'
import { ProdList, sizeArray } from '../configs/ProdListType'



const CartCard = () => {
    const { cartItems } = useAppSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
    const updateCartItems = (e: React.ChangeEvent<HTMLSelectElement>, key: string, item: ProdList) => {
        const payload = {
            key: key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            data: item
        }
        dispatch(updateCart(payload))
    }
    return (
        <div className='w-full flex flex-col items-center mr-[4rem] max-[920px]:mr-0 '>
            {
                cartItems?.map((item, i) => (
                    
                    <section key={i} className='w-full flex max-[558px]:flex-col items-center justify-center'>
                        <div className='flex  my-8 w-full max-[558px]:min-w-full items-center max-[558px]:items-start '>
                            <Image width={600} height={600} className='w-[10rem] max-[558px]:w-[7rem] max-[360px]:w-[6rem] bg-black/5' alt='/' src={`${item.data?.Image[0]?.url}`} />
                            <div className='flex flex-col h-[8rem] max-[558px]:h-[7rem] max-[300px]:h-fit justify-between w-full max-[920px]:gap-2 max-[460px]:gap-0 ml-[1.5rem] max-[558px]:ml-[0.5rem]'>
                                <main className='flex flex-col gap-2 '>
                                    <div className='flex w-full max-[558px]:min-w-full items-center justify-between'>
                                        <h2 className='text-[1.3rem] font-bold text-black/70 max-[634px]:text-[1rem] max-[360px]:text-[0.9rem] leading-snug'>{item.data.Name}</h2>
                                        <p className='text-black/60 font-bold text-right text-[0.9rem] max-[360px]:text-[0.8rem]'>MRP : ${item.data.Price.toFixed(1)}</p>
                                    </div>
                                    <h2 className='font-semibold text-[rgb(150,150,150)] max-[634px]:text-[14px]'>{item.data.Category}</h2>
                                </main>
                                <div className='flex w-full justify-between max-[558px]:min-w-full items-center mt-2'>
                                    <main className='flex max-[460px]:flex-col max-[460px]:gap-0 w-fit gap-4'>
                                        <div className='flex gap-2'>
                                            <div className='flex items-center'>
                                                <h2 className='text-black/70 font-semibold max-[360px]:text-[0.9rem]'>Size:</h2>
                                            </div>
                                            <select
                                                onChange={(e) => updateCartItems(e, 'selectedSize', item.data)}
                                                className='cursor-pointer max-[360px]:text-[0.8rem] focus:outline-none hover:text-black'
                                                defaultValue={item.selectedSize}>
                                                {
                                                    item?.data?.sizeArray.map((item: sizeArray, i: number) => (
                                                        <option
                                                            key={i}
                                                            className=''
                                                            value={item.size}
                                                            disabled={!item.enabled ? true : false}
                                                        >{item.size}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='flex items-center'>
                                                <h2 className='text-black/70 font-semibold max-[360px]:text-[0.9rem]'>Quantity:</h2>
                                            </div>
                                            <select
                                                onChange={(e) => updateCartItems(e, 'quantity', item.data)}
                                                className='p cursor-pointer focus:outline-none max-[360px]:text-[0.8rem] hover:text-black'
                                                defaultValue={item.quantity}>
                                                {Array.from({ length: 10 }, (_, i) => i + 1).map((quantity, i) => {
                                                    return (
                                                        <option
                                                            key={i}
                                                            className=''
                                                            value={quantity}
                                                        >{quantity}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </main>
                                    <div>
                                        <Trash
                                            onClick={() => dispatch(removeFromCart({ data: item.data }))} className='cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                ))

            }
        </div>
    )
}

export default CartCard


