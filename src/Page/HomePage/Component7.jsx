import React from 'react'

const Component7 = () => {
  return (
    <div className='h-[500px] md:h-[350px] lg:h-[350px] bg-[#E9FBF8] py-5'>
        <div className='md:grid grid-cols-2'>
        <div className=' h-[200px] w-[400px] md:w-[320px] lg:w-[400px] ml-[30px] md:ml-[10px] lg:ml-[20%]'>
                <h6 className='text-[#7BC0E3] '>News & Articles</h6>
                <h1 className='text-[20px] font-semibold'>DaCode Blog</h1>
                <p>On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry.</p>
                <button className='py-1 px-3  text-[#7BC0E3] border-[1px] rounded-full'>Seen All</button>
        </div>

        <div className='grid grid-cols-2 md:ml-[-40px]  '>
            <div className='h-[170px] w-[190px] lg:h-[200px] lg:w-[220px] p-3 ml-8 md:ml-2 lg:ml-[100px] bg-[#FFFFFF] shadow-2xl'>
                <h3 className='text-[12px] lg:text-[14px]'>Why Your SaaS Business should use WordPress</h3>
                <p className='text-[10px] lg:text-[12px]'>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                <p className='font-semibold text-[12px] text-[#7BC0E3]'>Read More  → </p>
            </div>
            <div className='h-[170px] w-[190px] lg:h-[200px] lg:w-[220px] p-3 ml-1  bg-[#FFFFFF] shadow-2xl'>
                <h3 className='text-[12px] lg:text-[14px] '>Why Your SaaS Business should use WordPress</h3>
                <p className='text-[10px] lg:text-[12px]'>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                <p className='font-semibold text-[12px] text-[#7BC0E3]'>Read More  → </p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Component7
