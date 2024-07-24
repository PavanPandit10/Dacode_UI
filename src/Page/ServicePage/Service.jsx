import React from 'react'
// import Vector from '../../assests/Vector.png'
import web1 from '../../assests/web1.png'
import w from '../../assests/w.png'
import web3 from '../../assests/web3.png'
import mg4 from '../../assests/mg4.png'
import startup5 from '../../assests/startup5.png'
import layers6 from '../../assests/layers6.png'
import Section2 from './Section2'
import Section3 from './Section3'


const Service = () => {
  return (
    <>

        <div className='h-[300px] md:h-[300px] lg:h-[400px] bg-[#60E1CB] '>
          <div className='py-5  '>
            <h1 className=' font-bold text-[18px] md:text-[23px] lg:text-[40px] text-center lg:mt-8'>What we can offer your SaaS Business</h1>
            <div className='w-[440px] ml-[12px]  md:w-[580px] md:ml-[13%] lg:w-[600px] text-center lg:ml-[28%]'>
              <p>We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns.</p>
            </div>
          </div>
        </div>

        <div className='h-[1550px] md:h-[1000px]  lg:h-[850px] '>
          <div className='mx-auto h-[1530px] w-[400px] md:h-[950px] md:w-[700px] mt-[-50px] lg:h-[800px] bg-[#E9FBF8] lg:w-[1250px] lg:mt-[-70px] rounded-3xl'>
              
              <div className='w-[350px] ml-[30px] md:w-[450px] md:ml-[16%]  lg:w-[500px] lg:ml-[30%] py-5'>
                <h1 className='text-center'>Our Service</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
              </div>

              <div className=' mx-auto h-[1300px] w-[300px] md:w-[420px] md:h-[660px]  lg:w-[750px] lg:h-[480px] '>
              <div className='grid  gap-3 md:grid-cols-2  lg:grid-cols-3 justify-items-center '>
                <div className='bg-white h-[200px] w-[220px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[220px] rounded-md shadow-2xl'>
                    <div className='border-t-4 border-[#60E1CB]'></div>
                    <img className='h-[30px] ml-[20px] lg:h-[28px] lg:ml-[20px] mt-4' src={web1} alt="" /> 
                    <h1 className='text-[16px] lg:text-[22px] ml-4 mt-2' >WordPress</h1>
                    <p className='ml-4 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur.</p>
                    <h2 className='text-[#60E1CB] text-[16px] lg:text-[16px] ml-4'>Read More → </h2>
                </div>
                <div className='bg-white h-[200px] w-[220px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[220px] rounded-md shadow-2xl'>
                    <div className='border-t-4 border-[#60E1CB]'></div>
                    <img className='h-[30px] ml-[20px] lg:h-[28px] lg:ml-[20px] mt-4' src={w} alt="" /> 
                    <h1 className='text-[16px] lg:text-[22px] ml-4 mt-2' >WordPress</h1>
                    <p className='ml-4 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur.</p>
                    <h2 className='text-[#60E1CB] text-[16px] lg:text-[16px] ml-4'>Read More → </h2>
                </div>
                <div className='bg-white h-[200px] w-[220px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[220px] rounded-md shadow-2xl'>
                    <div className='border-t-4 border-[#60E1CB]'></div>
                    <img className='h-[30px] ml-[20px] lg:h-[28px] lg:ml-[20px] mt-4' src={web3} alt="" /> 
                    <h1 className='text-[16px] lg:text-[22px] ml-4 mt-2' >WordPress</h1>
                    <p className='ml-4 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur.</p>
                    <h2 className='text-[#60E1CB] text-[16px] lg:text-[16px] ml-4'>Read More → </h2>
                </div>
                <div className='bg-white h-[200px] w-[220px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[220px] rounded-md shadow-2xl'>
                    <div className='border-t-4 border-[#60E1CB]'></div>
                    <img className='h-[30px] ml-[20px] lg:h-[28px] lg:ml-[20px] mt-4' src={mg4} alt="" /> 
                    <h1 className='text-[16px] lg:text-[22px] ml-4 mt-2' >WordPress</h1>
                    <p className='ml-4 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur.</p>
                    <h2 className='text-[#60E1CB] text-[16px] lg:text-[16px] ml-4'>Read More → </h2>
                </div>
                <div className='bg-white h-[200px] w-[220px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[220px] rounded-md shadow-2xl'>
                    <div className='border-t-4 border-[#60E1CB]'></div>
                    <img className='h-[30px] ml-[20px] lg:h-[28px] lg:ml-[20px] mt-4' src={startup5} alt="" /> 
                    <h1 className='text-[16px] lg:text-[22px] ml-4 mt-2' >WordPress</h1>
                    <p className='ml-4 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur.</p>
                    <h2 className='text-[#60E1CB] text-[16px] lg:text-[16px] ml-4'>Read More → </h2>
                </div>
                <div className='bg-white h-[200px] w-[220px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[220px] rounded-md shadow-2xl'>
                    <div className='border-t-4 border-[#60E1CB]'></div>
                    <img className='h-[30px] ml-[20px] lg:h-[28px] lg:ml-[20px] mt-4' src={layers6} alt="" /> 
                    <h1 className='text-[16px] lg:text-[22px] ml-4 mt-2' >WordPress</h1>
                    <p className='ml-4 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur.</p>
                    <h2 className='text-[#60E1CB] text-[16px] lg:text-[16px] ml-4'>Read More → </h2>
                </div>
              </div>
            </div>

          </div>  
        </div>


          <Section2/>
          <Section3/>

    </>
  )
}

export default Service