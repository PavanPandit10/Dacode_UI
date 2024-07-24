import React from 'react'
import one from '../../assests/one.png'
import two from '../../assests/two.png'
import three from '../../assests/three.png'
import four from '../../assests/four.png'
import wr from '../../assests/wr.jpg'

const Component4 = () => {
  return (

    <div className='h-[1000px] lg:h-[1000px]  '>
        <div className='flex justify-center '>
            <button className='border-[1px] rounded-full border-black justify-center px-4 py-1 lg:px-8 lg:py-2 mt-[-20px] shadow-md shadow-cyan-500/100 bg-white text-black hover:bg-[#60E1CB]'>See All</button>
        </div>

       

            <div className='py-12 h-[100px] w-[380px] md:w-[500px] lg:w-[600px] ml-10 lg:ml-[10%]'>
                <h1>Your idea into <span className='text-[#60E1CB]'>Reality</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non perspiciatis natus iusto tenetur vel reprehenderit laudantium distinctio explicabo ad! </p>
            </div>

            <div className='w-[400px] ml-[25px] md:w-[600px] lg:w-[600px] h-[600px] lg:ml-[10%] md:mt-[70px] mt-[60px] '>
                <div className=''>
                    <div className=' py-3 '>
                            <img className='h-[70px] md:h-[80px] lg:h-[90px] ml-[-7px] drop-shadow-xl  ' src={one} alt="" />
                        <div className='w-[350px] md:w-[500px] lg:w-[500px] mt-[-60px] ml-[54px] md:ml-20 md:mt-[-70px] lg:ml-[80px] lg:mt-[-80px]'>
                            <h1 className='text-[15px] md:text-[18px] lg:text-[22px] text-[#60E1CB]'>Your Idea</h1>
                            <p className='text-[12px] md:text-[13px] lg:text-[15px]'>In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
                        </div>  
                        <img className='h-[70px] md:h-[80px] lg:h-[90px] ml-[-7px] drop-shadow-xl  ' src={two} alt="" />
                        <div className='w-[350px] md:w-[500px] lg:w-[500px]  mt-[-60px] ml-[54px] md:ml-20 md:mt-[-70px] lg:ml-[80px] lg:mt-[-80px]'>
                            <h1 className='text-[15px] md:text-[18px] lg:text-[22px] text-[#60E1CB]'>Strategy meeting</h1>
                            <p className='text-[12px] md:text-[13px] lg:text-[15px]'>This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>
                        </div> 
                        <img className='h-[70px] md:h-[80px] lg:h-[90px] ml-[-7px] drop-shadow-xl ' src={three} alt="" />
                        <div className='w-[350px] md:w-[500px] lg:w-[500px]  mt-[-60px] ml-[54px] md:ml-20 md:mt-[-70px] lg:ml-[80px] lg:mt-[-80px]'>
                            <h1 className='text-[15px] md:text-[18px] lg:text-[22px] text-[#60E1CB]'>Agile and Scrum framework</h1>
                            <p className='text-[12px] md:text-[13px] lg:text-[15px]'>In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>
                        </div> 
                        <img className='h-[70px] md:h-[80px] lg:h-[90px] ml-[-7px] drop-shadow-xl ' src={four} alt="" />
                        <div className='w-[350px] md:w-[500px] lg:w-[500px]  mt-[-60px] ml-[54px] md:ml-20 md:mt-[-70px] lg:ml-[80px] lg:mt-[-80px]'>
                            <h1 className='text-[15px] md:text-[18px] lg:text-[22px] text-[#60E1CB]'>Your website goes live</h1>
                            <p className='text-[12px] md:text-[13px] lg:text-[15px]'>The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.</p>
                        </div>
                    </div> 
                    <div>
                        <img className='h-[250px] w-[320px] ml-[20px] md:ml-[80px] md:h-[300px] md:w-[420px] lg:mt-[-90%] lg:ml-[105%] lg:h-[600px] lg:w-[580px] ' src={wr} alt="" />
                    </div>
                </div>
            </div>

      



    </div>
  )
}

export default Component4