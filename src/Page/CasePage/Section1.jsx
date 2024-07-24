import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const Section1 = () => {
  return (
    <div>
            
      <div className='h-[320px] md:h-[280px] lg:h-[310px] bg-[#60E1CB] '>
          <div className='py-5  '>
            <h1 className=' font-bold text-[18px] md:text-[23px] lg:text-[40px] text-center lg:mt-8'>Some of our SaaS clients</h1>
            <div className='w-[440px] ml-[12px]  md:w-[580px] md:ml-[13%] lg:w-[900px] text-center lg:ml-[18%]'>
              <p>We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients.</p>
            </div>
          </div>
        </div>

          <Section2/>
          <Section3/>
          <Section4/>
          


    </div>
  )
}

export default Section1
