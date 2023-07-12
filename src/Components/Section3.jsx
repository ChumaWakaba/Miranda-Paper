import React from 'react'

const Section3 = () => {
  return (
    <div className='bg-[#C6BEB5]'>
        <div className='flex justify-between pt-7 max-w-[95%] mx-auto'>
            <div className='w-[40%] max-w-[470px] pr-12 border-r border-[#716E68]'>
                <div>
                    <h1 className='text-[#1C1B19] font-Canopee text-[100px] leading-none top-0 pt-0 mt-0'>Interactive
                    <span className='text-[180px]'> Artist!</span></h1>
                </div>
                <div>
                    <img className='border-l border-t border-r border-b border-black' src = 'https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg' alt = 'Star eye'/>
                </div>
                <p className='font-NewLight text-[30px] leading-none pt-6'>As a multidisciplinary freelancer, I'm passionate about creating iconic digital experiences through motion typography and creative coding for companies and agencies around the world.</p>
            </div>
            <div className='w-[60%]'>
                <img className='border-l border-t border-r border-b border-black' src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-1600.jpeg' alt='Eyes'/>
                <p className='text-[#1C1B19] font-Canopee text-[100px] leading-none pt-6'>Digital art director 
                    Interactive designer
                    Creative Developer
                    Based in Asterdam, NL.</p>
            </div>
        </div>
    </div>
  )
}

export default Section3