import React from 'react'
import Analyse from '../../assests/Analyse.jpg'
import Component2 from '../HomePage/Component2'
import Component3 from '../HomePage/Component3'
import Component4 from '../HomePage/Component4'
import Component5 from '../HomePage/Component5'
import Component6 from '../HomePage/Component6'
import Component7 from '../HomePage/Component7'



const Home = () => {
  return (
    <>
       
        
        <div className='h-[580px] md:h-[400px]  lg:h-[600px] bg-[#FFFFFF] '>
            <div className=''></div>

        <div className='md:grid grid-cols-2 py-3 '>
            <div className='py-2 h-[200px] ml-[25px] md:mt-16 lg:ml-20 lg:mt-32'>
                <div className='border-t-4 rounded-full w-[80px] border-blue-400'></div> <br />
                <h1 className='text-[20px] md:text-[25px] lg:text-[40px] font-bold '>WE HELP YOU TO CREATE <br /> YOUR <span className='text-[#60E1CB]'>WEBSITE</span></h1>
                <div className='w-[400px] h-[80px] md:w-[350px] md:h-[100px] lg:w-[600px] lg:h-[60px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae tempore maiores porro mollitia consequuntur sequi quod autem eum quis!</p>
                </div>
                <div className='md:mt-1'>
                    <button className='rounded-full py-1 px-2 bg-[#60E1CB] text-white'>Get started</button>
                    <button className='rounded-full py-1 px-2 text-[#60E1CB] border-[1px] ml-2 hover:bg-[#60E1CB] hover:text-black  '>Contact Us</button>
                </div>
            </div>
            <div>
                <img className=' h-[350px] w-[468px] mt-2 md:w-[400px] lg:w-[650px] lg:h-[520px]' src={Analyse} alt="" />
            </div>
        </div>

        </div>

        <Component2/>
        <Component3/>
        <Component4/>
        <Component5/>
        <Component6/>
        <Component7/>

    </>
  )
}

export default Home