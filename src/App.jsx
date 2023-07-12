import React from 'react'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'

const App = () => {
  return (
    <>
      <div id='main'>
        <div id='wrapper' className='bg-[#C6BEB5] h-screen w-screen'>
          <Navbar/>
          <Section1/>
          <Section2/>
          <Section3/>
        </div>
      </div>
    </>
  )
}

export default App