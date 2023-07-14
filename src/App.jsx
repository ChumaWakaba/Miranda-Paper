import React from 'react'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'
import Section6 from './Components/Section6'

// let wrapper = useRef(null);
// console.log(wrapper);

const App = () => {
  return (
    <>
      <div id='main'>
        <div className='bg-[#C6BEB5] h-screen w-screen relative'>
          <Navbar/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
        </div>
      </div>
    </>
  )
}

export default App