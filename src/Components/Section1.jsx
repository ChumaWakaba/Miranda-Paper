import React from 'react'

const Section1 = () => {
  return (
    <div>
        <section className='bg-[#C6BEB5] flex justify-between gap-7 py-7 px-4'>
            <div className='w-1/3 px-8'>
              <button className='text-left'>
                <div className='overflow-hidden'>
                    <img src='https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?' alt='' className='hover:scale-110 hover:border-l-black hover:border-r-black hover:border-t-black hover:border-b-black hover:border-black transition-all border-l border-t border-r border-b border-black'/>
                </div>
                <title className='flex mt-2'>
                  <h2 className='font-Canopee text-2xl border-r border-gray-700 pr-1'>AVRO</h2> 
                  <h2 className='font-Canopee text-2xl pl-1'>KO <span className='text-[#C6BEB5] bg-[#BB3D12] p-1 rounded ml-2'>NEW</span></h2>
                </title>
                <p className='font-NewLight font-extralight text-[#44423F] pt-2'>AvroKO is an award-winning global design firm, established itself as a global leader interior architecture for hospitality, restaurants and bars</p>
              </button>
            </div>
            <div className='w-1/3 px-8 border-l border-r border-gray-700 text-center'>
              <h1 className='text-6xl p-3 font-normal font-Canopee'>ALL WORK!</h1>
              <h2 className='text-3xl p-3 font-normal font-NewLight'>A Featured selection the latest work - of the last few years</h2>
              <p className='p-3 font-NewLight font-extralight text-[#44423F]'><span className='font-semibold text-black'>TIP!</span> Drag sideways to navigate</p>
            </div>
            <div className='w-1/3 px-8'>
              <button className='text-left'>
                <div className='overflow-hidden'>
                  <img src='https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?' alt='' className='hover:scale-110 hover:border-l-black hover:border-r-black hover:border-t-black hover:border-b-black hover:border-black transition-all border-l border-t border-r border-b border-black'/>
                </div>
                <h2 className='font-Canopee text-2xl mt-2'>THE ROGER HUB <span className='text-[#C6BEB5] bg-[#BB3D12] p-1 rounded ml-2'>NEW</span></h2>
                <p className='font-NewLight font-extralight text-[#44423F] pt-2'>The Roger Hub is an immersive web experience showcasing the tennis-inspired "On" sneakers. a collaboration born out of apartnership with the legendary Roger Federer</p>
                </button>
            </div>
          </section>
    </div>
  )
}

export default Section1