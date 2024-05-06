import { FiMail } from 'react-icons/fi';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import Button from "./Button";
import VISA from "../assets/VISA.png";
import Badge from "../assets/Badge.png";
import Paypal from "../assets/Paypal.png";
import Apple from "../assets/Apple.png";
import GPay from "../assets/GPay.png";
const Footer = () => {
  return (<div className='md:w-full w-[398px] mx-auto'>
     <div className='border md:h-[180px] h-[293px] relative md:w-[1330px] w-[358px] bg-black md:mt-16 mt-12 mb-8 md:ml-24 mx-auto rounded-lg '>
        <div className='md:flex justify-between text-white'>
            <div className='md:text-[40px] text-[32px] md:leading-[45px] md:w-[551px] w-[297px] leading-[35px] font-bold md:pl-16 pl-6 pt-8 md:pt-[43px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
            <form className='flex flex-col items-center md:ml-[260px] mt-9'>
  <div className='relative'>
    <Button variant="ghost" size="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <FiMail/>
    </Button> 
    <input className='py-3 md:px-12 px-20 rounded-full md:text-base text-sm pl-12 md:mr-12' type='email' placeholder='Enter your email address' />
  </div>
  <button className='rounded-full bg-white md:text-base text-sm text-black py-3 md:px-14 px-16 md:mr-12 mt-2 md:ml-0 ml-1' type='submit'>
    Subscribe to Newsletter
  </button>
</form>    
        </div> 
</div>

<div className='flex md:justify-between flex-wrap md:w-full w-[398px] mx-auto'>
<div className='md:ml-24 ml-4'>
  <h1 className='font-lilita md:text-3xl text-[28.85px]  font-bold '>SHOP.CO</h1>
  <p className='text-sm text-gray-400 md:pt-6 pt-4 md:w-[248px] w-[357px]'>We have clothes that suites your style and which you are proud to wear from  women to men</p>
  <div className='flex gap-3 md:mt-8 mt-5 h-[28px] w-[28px]'>
  <img src={logo1}></img>
  <img src={logo2}></img>
  <img src={logo3}></img>
  <img src={logo4}></img>
  </div>
</div>
<div className='md:ml-14 ml-4 md:text-base text-sm'>
  <h1 className='md:mt-2 mt-6'>COMPANY</h1>
  <p className='pt-6 text-gray-400'>About</p>
  <p className='pt-4 text-gray-400'>Features</p>
  <p className='pt-4 text-gray-400'>Works</p>
  <p className='pt-4 text-gray-400'>Career</p>
</div>
<div className='md:ml-14 ml-32 md:text-base text-sm'>
  <h1 className='md:mt-2 mt-6'>HELP</h1>
  <p className='pt-6 text-gray-400'>Customer Support</p>
  <p className='pt-4 text-gray-400'>Delivery Details</p>
  <p className='pt-4 text-gray-400'>Terms and Conditions</p>
  <p className='pt-4 text-gray-400'>Privacy Policy</p>
</div>
<div className='md:ml-14 ml-4 md:text-base text-sm'>
  <h1 className='md:mt-2 mt-6'>FAQ</h1>
  <p className='pt-6 text-gray-400'>Account</p>
  <p className='pt-4 text-gray-400'>Manage Deliveries</p>
  <p className='pt-4 text-gray-400'>Orders</p>
  <p className='pt-4 text-gray-400'>Payments</p>
</div>
<div className='md:mr-24 ml-20 md:text-base text-sm'>
  <h1 className='md:mt-2 mt-6'>RESOURCES</h1>
  <p className='pt-6 text-gray-400'>Free eBooks</p>
  <p className='pt-4 text-gray-400'>Development Tutorial</p>
  <p className='pt-4 text-gray-400'>How-to-Blog</p>
  <p className='pt-4 text-gray-400'>Youtube Playlist</p>
</div>
</div>
<hr className='border-t border-gray-300 mt-12 md:ml-24 md:mr-24 ml-4 mr-4' />
<div className='md:flex justify-between md:my-6 my-4'>
<div className='text-sm text-gray-500 md:ml-24 ml-16'>Shop.co@2000-2023,All Rights Reserved</div>
<div className='flex md:mr-64  md:w-[46px] md:h-[30px] w-[39px] h-[25px] mx-24'>
  <img src={VISA}></img>
  <img src={Badge}></img>
  <img src={Paypal}></img>
  <img src={Apple}></img>
  <img src={GPay}></img>
</div>
</div>
  </div>
  )
}

export default Footer