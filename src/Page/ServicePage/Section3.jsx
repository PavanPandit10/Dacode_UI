import React from 'react'
import Calender from '../../assests/Calender.jpg'

const Section3 = () => {
  return (
    <div>

        <div className='h-[700px] md:h-[500px] lg:h-[500px]  '>
            
            <div className='md:grid grid-cols-2'>
                <div className='w-[380px] md:w-[350px] ml-[20px] lg:ml-[15%] py-10'>
                    <h1 className='text-[17px] md:text-[19px] lg:text-[22px]'>Establishing online presence</h1>
                    <p className='lg:w-[400px] text-[10px] md:text-[12px]  lg:text-[12px]'>Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions. </p>
                    <p className='lg:w-[400px] text-[10px] md:text-[12px]  lg:text-[12px]'>This goes hand in hand with a responsive design, meaning it needs to be apt for different devices. </p>
                    <p className='lg:w-[400px] text-[10px] md:text-[12px]  lg:text-[12px]'>We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.</p>
                    <p className='lg:w-[400px] text-[10px] md:text-[12px]  lg:text-[12px]'>The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.</p>
                    <p className='lg:w-[400px] text-[10px] md:text-[12px]  lg:text-[12px]'>We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.</p>
                </div>
                <div className='ml-[20px] mt-[-40px] md:py-20'>
                    <h3 className='text-[17px] md:text-[19px] lg:text-[22px] ml-[25px]'>Schedule a free session</h3>
                    <img className='h-[300px] md:h-[350px] md:w-[350px] lg:w-[500px]' src={Calender} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Section3