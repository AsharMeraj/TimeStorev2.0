import Image from 'next/image'
import React from 'react'
import showcase1 from '/public/Images/showcase1.png'
import showcase2 from '/public/Images/showcase2.jpg'
import showcase3 from '/public/Images/showcase34.jpg'
import showcase4 from '/public/Images/showcase4.png'

const Showcase = () => {
    return (
        <section className='grid place-items-center min-[840px]:mb-[10rem] mb-[5rem]'>
            <div className='grid lg:grid-cols-[3fr_1fr] h-fit grid-cols-1 w-full lg:gap-6 gap-2 justify-between'>
                <main className='grid lg:grid-cols-[2fr_1fr] grid-cols-[1fr_1fr] lg:gap-6 gap-2'>
                    <Image className='w-screen lg:h-[38rem] 2xl:h-[42rem] h-[28rem] object-cover' alt='/' src={showcase1} />
                    <Image className='w-screen lg:h-[38rem] 2xl:h-[42rem] h-[28rem] object-cover' alt='/' src={showcase3} />
                </main>
                <main className='grid lg:grid-rows-[1fr_1fr] grid-rows-1 lg:grid-cols-1 grid-cols-[1fr,1fr] lg:gap-6 gap-2'>
                    <Image className='w-screen h-[18.2rem] 2xl:h-[20.2rem] object-cover' alt='/' src={showcase2} />
                    <Image className='w-screen h-[18.2rem] 2xl:h-[20.2rem] object-cover' alt='/' src={showcase4} />
                </main> 
            </div>
        </section>
    )
}

export default Showcase