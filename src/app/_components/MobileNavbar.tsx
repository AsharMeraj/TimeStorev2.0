"use client";
import React, { useEffect, useState } from 'react'
import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import cart from '/public/Images/cart.png'
import { useAppSelector } from '../Store/hooks';
import { ProdList } from '../configs/ProdListType';
import { FetcherProducts } from '../configs/FetcherProducts';
import { ShoppingCart } from 'lucide-react';
type ChildType = {
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}




const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav }) => {
    const { cartItems } = useAppSelector((state) => state.cart)
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
    const [allProducts, setAllProducts] = useState<ProdList[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await FetcherProducts()
            setAllProducts(data)
        }
        fetchData()
    }, [])

    const AllCategories = allProducts.map((items) => (
        items.Category
    ))

    const navOptions = [...new Set(AllCategories)]


    const ShowSubmenu = () => {
        setShowSubmenu(true)
    }
    const HideSubmenu = () => {
        setShowSubmenu(false)
    }

    useEffect(() => {
        ShowSubmenu()
        HideSubmenu()
    }, [])


    return (
        <main className='flex items-center justify-center w-full before'>
            <div className='flex flex-col justify-between gap-12 my-4 items-center h-fit'>
                <X onClick={() => { setShowMobileNav(false) }} className='absolute top-0 mt-8 mr-6 right-0' />
                <Link onClick={() => { setShowMobileNav(false) }} href={'/Cart'}>
                    {cartItems.length > 0 && <span className='w-[1.3rem] h-[1.2rem] grid place-items-center absolute rounded-full bg-[var(--primary)] translate-y-[-78%] translate-x-[35%] text-[12px] text-white tracking-wider '><h2 className='pt-[1.5px]'>{cartItems.length}</h2></span>}
                    <ShoppingCart className='w-[1.5rem] relative' />
                </Link>
                <ul className='flex flex-col justify-between gap-16 items-center'>
                    <li className='text-[1.1rem] font-semibold hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/'}>Home</Link>
                    </li>
                    <li id='shop' onClick={() => setShowSubmenu(!showSubmenu)} className='flex flex-col text-[1.1rem] font-semibold hover:opacity-80 cursor-pointer select-none relative'>
                        <span className='flex gap-1 justify-center'><h1>Shop</h1><ChevronDown size={20} /></span>
                        <ul id='submenu' className={showSubmenu ? `mt-2 rounded-md top-[6.5rem] border-t-4 border-[var(--primary)]  bg-white shadow-md duration-300 w-[10rem] max-lg:w-[8rem] px-2 py-4` : "hidden"}>
                            <div className='flex flex-col gap-4'>
                                <Link onClick={() => setShowMobileNav(false)} href={"/AllProducts"} className='hover:text-[var(--primary)] text-black duration-200 cursor-pointer'>All watches</Link>
                                {
                                    navOptions.map((item, id) => {
                                        return <Link onClick={() => setShowMobileNav(false)} key={id} href={`/shop/${item}`} className='hover:text-[var(--primary)] text-black duration-200 cursor-pointer'>{item}</Link>
                                    })
                                }
                            </div>
                        </ul>
                    </li>
                    <li className='text-[1.1rem] font-semibold hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/'}>About</Link>
                    </li>
                    <li className='text-[1.1rem] font-semibold hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/AllProducts'}>Latest</Link>
                    </li>
                    <li className='text-[1.1rem] font-semibold hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MobileNavbar