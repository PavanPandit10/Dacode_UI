import React from 'react'
import Section2 from './Section2'

const Section1 = () => {
  return (
    <div>
           
        <div className='h-[180px] md:h-[180px] lg:h-[280px] bg-[#60E1CB] '>
          <div className='py-5  '>
            <h1 className=' font-bold text-[18px] md:text-[23px] lg:text-[40px] text-center lg:mt-8'>News & Articles</h1>
            <div className='w-[440px] ml-[12px]  md:w-[580px] md:ml-[13%] lg:w-[600px] text-center lg:ml-[28%]'>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
            </div>
          </div>
        </div>

        <Section2/>

    </div>
  )
}

export default Section1