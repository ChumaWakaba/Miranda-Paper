import React from 'react'

const Section6 = () => {
  return (
    <div className='bg-[#C6BEB5] p-7'>
        <div className='flex justify-between gap-3 border-t border-b border-[#1B1B19] py-7 max-w-[95%] mx-auto'>
            <div className='flex'>
                <words>
                    <h3>Site of the day</h3>
                    <h1 className='font-Canopee text-xl'>Awards</h1>
                </words>
                <num>9</num>
            </div>
            <div className='flex'>
                <words>
                    <h3>Site of the month</h3>
                    <h1>Winners</h1>
                </words>
                <num>1</num>
            </div>
            <div className='flex'>
                <words>
                    <h3>FWA of the day</h3>
                    <h1>Awards</h1>
                </words>
                <num>6</num>
            </div>
            <div className='flex'>
                <words>
                    <h3>Acclaimed</h3>
                    <h1>Mentions</h1>
                </words>
                <num>8</num>
            </div>
        </div>
    </div>
  )
}

export default Section6