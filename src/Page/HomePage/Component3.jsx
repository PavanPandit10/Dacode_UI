import React from 'react'
import sc1 from '../../assests/sc1.jpg'
import sc2 from '../../assests/sc2.jpg'
import sc3 from '../../assests/sc3.jpg'
// import idea from '../Assets/Idea'


const Component3 = () => {
  return (
   
        <div className="h-[1330px] lg:h-[600px] md:h-[700px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                <p className=" lg:text-[20px] font-semibold text-[#60E1CB]">Portfolio</p>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-black">Our Great Work</h2>
                    
                </div>
        
                <div className="mt-8 flex justify-center space-x-4">
                    <button className="text-[#7BC0E3] border-b-2 border-blue-500 pb-1">Website Optimization</button>
                    <button className="text-[#7BC0E3] dark:text-zinc-300 pb-1">Website Redesign</button>
                    <button className="text-[#7BC0E3] dark:text-zinc-300 pb-1">Search Engine Optimization</button>
                </div>
        
                <div className="mt-10 flex justify-between items-center">
                    <button className="text-zinc-200 dark:text-zinc-400 h-[40px] w-[40px] bg-gray-700 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
        
                   <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-5'>
                        <div className='h-[300px] w-[280px]  '>
                            <img className='rounded-lg' src={sc1} alt="" /> <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptate.</p>
                        </div>
                        
                        <div className='h-[300px] w-[280px] '>
                            <img className='rounded-lg' src={sc3} alt="" /> <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptate.</p>
                        </div>
                        <div className='h-[300px] w-[280px] '>
                            <img className='rounded-lg' src={sc1} alt="" /> <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptate.</p>
                        </div>
                   </div>
        
                    <button className="text-zinc-200 dark:text-zinc-400 h-[40px] w-[40px] bg-gray-700 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
    
      
    
  )
}


export default Component3