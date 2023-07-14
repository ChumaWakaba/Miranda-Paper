import React from 'react'

const Section5 = () => {
  return (
    <div className='bg-[#C6BEB5]'>
        <section className='flex pt-7 max-w-[95%] mx-auto'>
            <div className='w-[65%] pr-12'>
                <div className='flex justify-between text-left pb-9'>
                    <div className='w-1/2'>
                        <h1 className='text-5xl p-3 font-semibold font-CondMedium'>UPCOMING NEXT</h1>
                        <h2 className='text-3xl p-3 font-normal font-NewLight'>Fresh entry - a selected entry from the latest digital releases</h2>
                        <p className='p-3 font-NewLight font-extralight text-[#44423F]'><span className='font-semibold text-black'>TIP!</span> Click on image to explore</p>
                    </div>
                    <div className='w-1/2 border-l border-black pl-9'>
                        <div className='overflow-hidden'>
                            <img src='https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5c79f349770ebcc28ec4_thumbnail-small.webp?' alt='' className='hover:scale-110 hover:border-l-black hover:border-r-black hover:border-t-black hover:border-b-black hover:border-black transition-all border-l border-t border-r border-b border-black'/>
                        </div>
                        <h2 className='font-CondMedium text-2xl mt-2 font-semibold py-2'>UNEXPECTED TIME</h2>
                        <p className='font-NewLight font-extralight text-[#44423F] pt-2'>Unexpected is a classic-futuristic gamification web experience showcasing the lost history & culture in a work dominated by the virtual reality.</p>
                    </div>
                </div>
                <div>
                    <img src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg' alt='' />
                </div>
            </div>
            <div className='w-[35%] max-w-[470px] pl-12 border-l border-[#1C1B19]'>
                <h1 className='text-[#1C1B19] font-Canopee text-[90px] leading-none top-0 pt-0 mt-0'>Think,Create
                <span className='text-[170px]'> Deliver</span></h1>
                <p className='font-NewLight text-[30px] leading-none pt-6 font-light text-[#1C1C1A] pb-4'>A strong project is created by deep collaboration, I design, develop and deliver websites that drive results and win awards.</p>
                <p className='font-NewLight text-[30px] leading-none pt-6 font-light text-[#1C1C1A] py-10'>Like an artisan, I like to start from raw matter and give life to an iconic product that makes your brand stand out, starting from a visual strategy that guides the client's vision to reality.</p>
                <img className='mx-auto' src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg' alt='All Work' />
            </div>
        </section>
    </div>
  )
}

export default Section5