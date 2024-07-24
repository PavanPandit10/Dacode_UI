import React from 'react'
import ph1 from '../../assests/ph1.png'
import ph2 from '../../assests/ph2.png'
import ph3 from '../../assests/ph3.png'
import ph4 from '../../assests/ph4.png'
import ph5 from '../../assests/ph5.png'

const Component6 = () => {
  return (
    <div>

        <div>
            <div className="max-w-screen-xl mx-auto px-4 py-12 drop-shadow-sm ">
                <div class="text-center">
                    <div class="text-sm uppercase text-[#7BC0E3]">Testimonials</div>
                    <h2 class="text-3xl font-semibold mt-2">Our Happy Clients</h2>
                </div>
                <div class="mt-10 flex justify-center items-center">
                    <button class="text-zinc-400 hover:text-zinc-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div class="bg-white shadow-lg rounded-lg p-6 mx-4 w-full max-w-3xl">
                        <div class=" mb-4">
                            <div class="text-yellow-400 text-xl grid justify-items-center">
                                <span class="font-bold text-black ">5.0</span>
                                <p className=''>★★★★★</p>
                            </div>
                        </div>
                        <p class="text-zinc-600">"We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand."</p>
                        <div class="mt-6 flex items-center">
                            {/* <img src="https://placehold.co/40x40" alt="user" class="rounded-full"> */}
                             
                        </div>
                    </div>
                    <button class="text-zinc-400 hover:text-zinc-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                   
                </div>
             
                <div className='grid grid-cols-5  md:mt-[50px] w-[300px] ml-[50px] mt-3 md:w-[350px] md:ml-[180px] lg:w-[650px] lg:ml-[300px] lg:mt-[60px]' >
                    <img src={ph1} alt="user1" className="rounded-full h-[50px] lg:h-[70px] opacity-50 hover:opacity-100 cursor-pointer" /> 
                    <img src={ph2} alt="user1" className="rounded-full h-[50px] lg:h-[70px] opacity-50 hover:opacity-100 cursor-pointer" /> 
                    <img src={ph3} alt="user1" tw="rounded-full h-[50px] lg:h-[70px] opacity-50 hover:opacity-100 cursor-pointer" /> 
                    <img src={ph4} alt="user1" className="rounded-full h-[50px] lg:h-[70px] opacity-50 hover:opacity-100 cursor-pointer" /> 
                    <img src={ph5} alt="user1" className="rounded-full h-[50px] lg:h-[70px] opacity-50 hover:opacity-100 cursor-pointer" /> 
                   
                </div>
                <div className=' ml-[160px] mt-2 md:ml-[45%] lg:ml-[560px] '>
                    <div className="text-[10px] lg:text-[13px] font-semibold">Paulus Haverinen</div>
                    <div className=" text-[8px] lg:text-[12px]  text-[#60E1CB]">Owner, Iikarakenne Ltd</div>
                </div>
            </div>

        </div>
 


    </div>
  )
}

export default Component6