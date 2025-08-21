import React from 'react'
import Check from '/public/Images/Check.png'
import Image from 'next/image'
import Button from '@/app/_components/Button/Button'
import Link from 'next/link'

const page = () => {
  return (
    <section className='px-6 py-12 lg:py-[10rem]'>
      <main className='relative w-fit m-auto flex flex-col items-center gap-6'>
        <div className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] bg-[var(--primary)] grid place-items-center rounded-full'>
          <Image className='w-[60px] md:w-[80px]' src={Check} alt='/' />
        </div>
        <h2 className='text-2xl md:text-3xl font-bold text-[var(--primary)] text-center whitespace-nowrap'>Payment Successfull!</h2>
        <p className='text-center md:text-xl'>Thank You For Your Purchase</p>
        <Link href={'/'} className='w-full'>
          <Button>Back to home</Button>
        </Link>
      </main>
    </section>
  )
}

export default page