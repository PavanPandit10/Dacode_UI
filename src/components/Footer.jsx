import ig from '../assests/ig.png'
import fb from '../assests/fb.png'
import tt from '../assests/tt.png'

const Footer = () => {
  return (
    <div className="h-[330px] md:h-[300px] bg-[#60E1CB]">
     
    <div className="lg:grid grid-cols-4 py-5 ">
     <div className="w-[400px] text-center ml-6 lg:h-[100px] md:w-[500px] md:ml-[130px] lg:w-[400px] lg:ml-[30%] ">
      <h2 className="text-[13px] lg:text-[25px] font-bold lg:text-left">LOGO</h2>
      <p className="text-[12px] lg:text-[15px] lg:text-left">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
     </div>
       <div className="flex flex-cols-4 gap-4 w-[450px] md:w-[600px] md:ml-[80px] lg:w-[800px] lg:ml-[60%] justify-center  ">
          <div className="">
            <h1 className="font-semibold text-[14px] md:text-[16px] lg:text-[22px]">Work</h1>
            <p className="text-gray-500 text-[11px] lg:text-[15px]">Blog</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">How We Work</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">Testimonials</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[14px] md:text-[16px] lg:text-[22px]">Services</h1>
            <p className="text-gray-500 text-[11px] lg:text-[15px]">Marketing Strategy</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">Website Optimization</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">Email Maerketing</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[14px] md:text-[16px] lg:text-[22px]">Business Solution</h1>
            <p className="text-gray-500 text-[11px] lg:text-[15px]">Partnership</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">About Project</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">Corporate</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[14px] md:text-[16px] lg:text-[22px]">Language</h1>
            <p className="text-gray-500 text-[11px] lg:text-[15px]">Blog</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">How We Work</p>
            <p className="mt-[-10px] text-[11px] lg:text-[15px] text-gray-500">Testimonials</p>
          </div> 
          
       </div>
    </div> 

        <div className="border-b-2 w-[430px] ml-3 md:w-[460px] md:ml-[150px] md:mt-[-20px] lg:w-[1160px] lg:ml-[95px] ">
        </div>

        <div className='grid grid-cols-2 justify-items-center py-2 lg:ml-[-17%]'>
            <h6>© DaCode. 2020</h6>
          <div className='grid grid-cols-3 w-[150px] lg:ml-[50%]'>
            <img className='h-[18px] lg:h-[25px]' src={fb} alt="" />
            <img className='h-[18px] lg:h-[25px]' src={tt} alt="" />
            <img className='h-[18px] lg:h-[25px]' src={ig} alt="" />
          </div>
        </div>
      
    </div>
  );
};
export default Footer;
