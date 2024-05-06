import React from 'react'
import Button from './Button'
import Rectangle from "../assets/Rectangle.png"
import Vector from "../assets/Vector.png"
import Versace from "../assets/Versace.png"
import zara from "../assets/zara.png"
import gucci from "../assets/gucci.png"
import prada from "../assets/prada.png"
import Calvin from "../assets/Calvin.png"
const Background = () => {
  return (<>
  <div className='md:w-full w-[390px] mx-auto h-full md:h-[663px] bg-gray-200 md:mt-4 mt-6 relative flex flex-col'>
    <div className='md:pt-[103px] pt-10'>
    <h1 className='font-lilita md:text-[64px] text-4xl font-bold md:leading-[64px] md:ml-24 ml-4 'style={{ whiteSpace: 'pre-line' }} >FIND CLOTHES {'\n'} THAT MATCHES {'\n'} YOUR STYLE</h1> 
        <p className='text-base leading-[22px] text-gray-500 md:ml-24 ml-4 md:mt-6 mt-5 md:w-[545px] w-[358px]'>Browse through our diverse range of meticulously crafted garments,designed to bring out your individuality and cater to your sense of style</p>
        <Button className='bg-black text-white md:w-[210px] w-[358px] font-satoshi md:ml-24 ml-4  md:mt-8 mt-6 rounded-full py-3'>
          Shop Now
        </Button>{'\n'}
    </div>
        
        <div className='flex flex-wrap font-satoshi md:mt-12 mt-5 md:ml-24 ml-14'> 
        <div>
          <p className='font-bold text-2xl md:text-[40px] md:ml-8 mt-5 '>200+</p>
          <p className='text-xs text-gray-500 md:pt-2 md:text-base leading-[22px]'>International Brands</p> 
        </div>
        <div className='border-l md:h-20 h-16 md:mt-0 mt-5 md:ml-8 ml-8 border-gray-300'></div>
        <div className='ml-8'>
          <p className='font-bold text-2xl md:text-[40px]  mt-5'>2000,+</p>
          <p className='text-xs text-gray-500 md:pt-2 md:text-base leading-[22px]'>High Quality Products</p> 
        </div>
        <div className='md:border-l h-20 ml-8 border-gray-300'></div>
        <div  className='md:ml-8 ml-24'>
          <p className='font-bold text-2xl md:text-[40px] mt-5'>30,000+</p>
          <p className='text-xs text-gray-500 md:pt-2 md:text-base leading-[22px]'>Happy Customers</p> 
        </div>
        </div>
        <div>
        <div className='md:absolute md:right-[40px] md:top-[40px] md:pr-8 md:h-[623.5px] md:w-[600px]  w-[390px]'>
        <img className='md:w-full md:h-full' src={Rectangle} alt='Rectangle Image' />
      </div>
      <img className='absolute md:right-[81px] md:top-[86px] right-[20px] top-[500px] pr-8 h-[76px] w-[90px] md:h-[104px] md:w-[104px] ' src={Vector}></img>
        </div>      
  </div>  
  <div className='border md:h-[122px] h-[146px] md:w-full w-[390px] mx-auto bg-black'>
  <div className='flex flex-wrap md:flex-row justify-around  items-start'>
    <img className='w-[116px] h-[23px] md:w-[166px] md:h-[33px] md:ml-10 ml-4 md:my-11 mt-11' src={Versace} alt='Versace'/>
    <img className='w-[63px] h-[26px] md:w-[91px] md:h-[38px] md:ml-6 ml-8 mt-11 md:my-10' src={zara} alt='Zara'/>
    <img className='w-[109px] h-[25px] md:w-[156px] md:h-[36px] md:ml-6 mr-4 mt-11 md:my-10'src={gucci} alt='Gucci'/>
    <img className='w-[127px] h-[21px] md:w-[194px] md:h-[32px] md:mr-6 ml-12 mt-5 md:my-11' src={prada} alt='Prada'/>
    <img className='w-[134px] h-[21px] md:w-[206px] md:h-[33px] md:mr-10 ml-11 mt-5 md:my-11 'src={Calvin} alt='Calvin Klein'/>
  </div>
</div>

  </>
  )
}

export default Background