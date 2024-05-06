import { FaStar, FaCheck } from 'react-icons/fa';

const Review = () => {
  return (
    <div className='md:w-full w-[398px] mx-auto'>
<div className='font-lilita md:ml-[100px] ml-4 md:mt-20 mt-[50px] md:text-5xl text-[32px] font-bold overflow-hidden'>
  <span className='block md:inline'>OUR HAPPY </span>
  <span className='block md:inline'>CUSTOMERS</span>
</div>

    
      <div className='flex justify-between items-center md:my-8 my-6 md:m-24 mx-auto md:ml-24'>
        <div className='border border-gray-300 mx-auto md:w-[400px] w-[358px] rounded-md p-4'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500 mr-1' />
            ))}
          </div>

          <div className='flex mt-3.5'>
            <p className='text-xl leading-[22px] font-bold'>John Doe.</p>
            <FaCheck className='text-green-500 mt-1 ml-1' />
          </div>

          <p className='text-base leading-[22px] md:w-[336px] w-[310px] text-gray-700 mt-3.5'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>

      
        <div className='hidden md:block border border-gray-300 w-[400px] mx-16 rounded-md p-4'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500 mr-1' />
            ))}
          </div>

          <div className='flex mt-3.5'>
            <p className='text-xl leading-[22px] font-bold'>Jane Doe.</p>
            <FaCheck className='text-green-500 mt-1 ml-1' />
          </div>

          <p className='text-base leading-[22px] w-[336px] text-gray-700 mt-3.5'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>

        <div className='hidden md:block border border-gray-300 w-[400px] mx-4 rounded-md p-4'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500 mr-1' />
            ))}
          </div>

          <div className='flex mt-3.5 '>
            <p className='text-xl leading-[22px] font-bold'>Bob Doe.</p>
            <FaCheck className='text-green-500 mt-1 ml-1' />
          </div>

          <p className='text-base leading-[22px] w-[336px] text-gray-700 mt-3.5'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;