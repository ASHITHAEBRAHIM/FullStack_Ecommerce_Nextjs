import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


interface Product{
    id: number;
    title: string;
    image: string;
    price: number;
  }

const Product = () => {
    const { isLoading,data } = useQuery('products', () => axios.get('https://fakestoreapi.com/products'));
    const { isLoading: isLoadingTopSelling, data: dataTopSelling } = useQuery('topSelling', () =>
    axios.get('https://fakestoreapi.com/products?sort=desc'));

    const [showAll, setShowAll] = useState(false);
    const [showAllTopSelling, setShowAllTopSelling] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const visibleProducts = showAll ? data?.data : (data?.data || []).slice(0, isMobile ? 2 : 4);
    const visibleProductsTopSelling = showAllTopSelling
    ? dataTopSelling?.data
    : (dataTopSelling?.data || []).slice(0, isMobile ? 2 : 4);


    return( <div className='md:w-full w-[398px] mx-auto'>
        <h1 className='font-lilita md:mt-[72px] mt-[50px] text-center md:text-5xl text-[32px] font-bold'>NEW ARRIVALS</h1>
        <div className={`grid ${isMobile ? 'grid-cols-2' : 'md:flex md:flex-wrap justify-center'} md:pt-8 pt-2`}>
          {isLoading && <h1>Loading...</h1>}
          {visibleProducts.map((product: Product) => (
            <div key={product.id} className='md:max-w-xs mx-6 my-4 bg-white p-4'>
              <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className='md:h-[250px] md:w-[250px] h-[200px] mx-auto w-[180px] object-cover mb-4 bg-gray-300' />
            </Link>
            <p className='md:text-xl text-base font-bold mb-2 mx-4'>{product.title}</p>
            <div className='flex items-center mx-4'>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500 mr-1' />
            ))}
          </div>
            <p className='md:text-2xl text-xl font-bold mx-4'>${product.price}</p>
          </div>
          ))}
        </div>
  
        {!showAll && data?.data.length > (isMobile ? 2 : 4) && (
          <div className='text-center'>
             <button onClick={() => setShowAll(true)} className='mt-4 bg-white border md:w-[218px] w-[358px] md:px-12  md:py-2 py-3 rounded-full'>
            View All
          </button>
          </div>
        )}
        <hr className='border-t border-gray-300 md:my-16 my-10 md:w-[1340px] w-[358px] mx-auto md:ml-24' />

        <h1 className='font-lilita mt-8 text-center md:text-5xl text-[32px] font-bold'>TOP SELLING</h1>
        <div className={`grid ${isMobile ? 'grid-cols-2' : 'md:flex md:flex-wrap justify-center'} md:pt-8 pt-2`}>
        {isLoadingTopSelling && <h1>Loading...</h1>}
        {visibleProductsTopSelling.map((product: Product) => (
          <div key={product.id} className='md:max-w-xs mx-4 my-4 bg-white p-4'>
             <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className='md:h-[250px] md:w-[250px] h-[190px] w-[190px] object-cover mb-4 bg-gray-300'/>
            </Link>
            <p className='md:text-xl text-base font-bold mb-2'>{product.title}</p>
            <div className='flex items-center'>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500 mr-1' />
            ))}
          </div>
            <p className='md:text-2xl text-xl font-bold'>${product.price}</p>
          </div>
        ))}
      </div>

      {!showAllTopSelling && dataTopSelling?.data.length > (isMobile ? 2 : 4) && (
        <div className='text-center'>
          <button onClick={() => setShowAllTopSelling(true)} className='mt-4 bg-white border md:w-[218px] w-[358px] md:px-12 md:py-2 py-3 rounded-full'>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Product