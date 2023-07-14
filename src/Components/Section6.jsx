import React from 'react'

const Section6 = () => {
  return (
    <div className='bg-[#C6BEB5] py-7'>
        <div className='flex justify-between gap-3 border-t border-b border-[#1B1B19] py-7 max-w-[95%] mx-auto'>
            <div className='flex gap-3 w-1/4'>
                <words className='text-center'>
                    <h3 className='font-CondMedium text-3xl uppercase font-extralight text-[#3A3834]'>Site of the day</h3>
                    <h1 className='font-Canopee text-7xl text-[#1C1C1A]'>Awards</h1>
                </words>
                <num className='font-NewLight text-9xl text-[#1C1C1A]'>9</num>
            </div>
            <div className='flex gap-3 w-1/4'>
                <words className='text-center'>
                    <h3 className='font-CondMedium text-3xl uppercase font-extralight text-[#3A3834]'>Site of the month</h3>
                    <h1 className='font-Canopee text-7xl text-[#1C1C1A]'>Winners</h1>
                </words>
                <num className='font-NewLight text-9xl text-[#1C1C1A]'>1</num>
            </div>
            <div className='flex gap-3 w-1/4'>
                <words className='text-center'>
                    <h3 className='font-CondMedium text-3xl uppercase font-extralight text-[#3A3834]'>FWA of the day</h3>
                    <h1 className='font-Canopee text-7xl text-[#1C1C1A]'>Awards</h1>
                </words>
                <num className='font-NewLight text-9xl text-[#1C1C1A]'>6</num>
            </div>
            <div className='flex gap-3 w-1/4'>
                <words className='text-center'>
                    <h3 className='font-CondMedium text-3xl uppercase font-extralight text-[#3A3834]'>Acclaimed</h3>
                    <h1 className='font-Canopee text-7xl text-[#1C1C1A]'>Mentions</h1>
                </words>
                <num className='font-NewLight text-9xl text-[#1C1C1A]'>8</num>
            </div>
        </div>
    </div>
  )
}

export default Section6