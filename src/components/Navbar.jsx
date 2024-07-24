
import React, { useState } from 'react';

const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

<nav className="bg-[#FFFFFF] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="">
          <a href="#" className="text-black text-[25px] ml-10 font-bold tracking-widest no-underline ">DACODE</a>
        </div>
        <div className="hidden md:flex py-2   ">
          <a href="/" className=" text-[#60E1CB] text-[18px] font-semibold mx-4 hover:text-black mt-1 no-underline">Home</a>
          <a href="service" className=" text-[#60E1CB] text-[18px] font-semibold mx-4 hover:text-black mt-1 no-underline">Services</a>
          <a href="/casepage" className=" text-[#60E1CB] text-[18px] font-semibold mx-4 hover:text-black mt-1 no-underline">Case</a>
          <a href="/team" className=" text-[#60E1CB] text-[18px] font-semibold mx-4 hover:text-black mt-1 no-underline">DaCode Specialists</a>
          <a href="blog" className=" text-[#60E1CB] text-[18px] font-semibold mx-4 hover:text-black mt-1 no-underline">Blog</a>
          {/* <a href="#" className="block py-2 px-3 rounded-full items-center justify-center bg-[#7BC0E3] text-[13px] text-white">Request a quote</a> */}
          <button className='block py-2 px-3 rounded-full bg-[#7BC0E3] text-[15px] font-semibold text-white mx-4 hover:bg-[#60E1CB] hover:text-black '>Request a quote</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="outline-none mobile-menu-button mr-5" >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg" >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-2">
          <a href="/" className=" text-[#60E1CB] text-[18px] font-semibold hover:text-black no-underline  py-2 px-10 ">Home</a>
          <a href="service" className="block text-[#60E1CB] text-[18px] font-semibold hover:text-black no-underline  py-2 px-10 ">Services</a>
          <a href="casepage" className="block text-[#60E1CB] text-[18px] font-semibold hover:text-black no-underline  py-2 px-10">Case</a>
          <a href="team" className="block text-[#60E1CB] text-[18px] font-semibold hover:text-black no-underline  py-2 px-10">DaCode Specialists </a>
          <a href="blog" className="block text-[#60E1CB] text-[18px] font-semibold hover:text-black no-underline  py-2 px-10">Blog </a>
          <button className='block py-1 px-2 rounded-full bg-[#7BC0E3] text-[13px] ml-[20px] text-white'>Request a quote</button>
        </div>
      )}
    </nav>

    </div>
  )
}

export default Navbar