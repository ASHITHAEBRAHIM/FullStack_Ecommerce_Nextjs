import { useParams,useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from '../components/Header';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import Footer from '../components/Footer';
import useCartStore from '../cart';

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  description:string;
}

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

const ProductDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const { isLoading, isError, data: product } = useQuery<Product, Error>(['product', id], () => fetchProduct(id ?? ''));

  const availableColors = ['Red', 'Blue', 'Green', 'Yellow'];
  const [selectedColor, setSelectedColor] = useState<string>(availableColors[0]);

  const availableSizes = ['Small', 'Medium', 'Large', 'XLarge'];
  const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0]);

  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
  const { addToCart,cartItems } = useCartStore();

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  const handleAddToCart = () => {
    if (!product) {
      console.error("Product is undefined");
      return;
    }
    
    const isProductInCart = cartItems.some((item) => item.id === product.id && item.color === selectedColor && item.size === selectedSize);
    if (isProductInCart) {
      navigate('/cart');
      return;
    }
    const cartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !product) {
    return <p>Error loading product details</p>;
  }

  const { title, image, price, description } = product; 
  return (<>
   <Header/>
   <hr className='border-t border-gray-300 my-6 md:w-[1440px] w-[398px] md:mx-8 mx-auto' />
<div className='md:flex md:mx-8 md:w-full w-[398px] mx-auto'>
  <div><img className='md:h-[530px] md:w-[444px] w-[358px] h-[290px] md:ml-24' src={image} alt={title } /></div>
  <div className=' md:w-[590px] ml-4'>
  <p className='font-lilita md:text-[40px] text-2xl font-bold leading-normal mt-5'>{title}</p>   
  <div className='flex items-center mt-3'>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500 mr-1' />
            ))}
          </div>
  <p className='md:text-[32px] text-2xl font-bold mt-2'>${price}</p>
  <p className='md:text-base text-sm text-gray-500 leading-[22px] mt-2 md:w-[590px] w-[358px]'>{description }</p>
  <hr className='border-t border-gray-300 my-6 md:w-[590px] w-[358px] mx-2' />
  <div>
    <h1 className='md:text-base text-sm text-gray-500'>Select Colors</h1>
    <div className="flex space-x-4 mt-4">
        {availableColors.map((color) => (
          <div
            key={color}
            className={`rounded-full w-8 h-8 cursor-pointer border ${
              color === selectedColor ? 'border-black' : 'border-gray-300'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
  </div>
  <hr className='border-t border-gray-300 my-6 md:w-[590px] w-[358px] mx-2' />
  <div>
    <h1 className='md:text-base text-sm text-gray-500'>Choose Size</h1>
    <div className='flex space-x-4 mt-4'>
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`rounded-full px-4 py-2 cursor-pointer border md:text-base text-sm ${
                    size === selectedSize ? 'border-black bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
  </div>
  <hr className='border-t border-gray-300 my-6 md:w-[590px] w-[358px] mx-2' />
  <div className='flex my-8'>
  <QuantitySelector
  quantity =  {quantity}
  onIncrement= {handleIncrement}
  onDecrement= {handleDecrement}
  />
  <Button className='bg-black text-white font-satoshi rounded-full ml-5 px-12 py-3 md:w-[500px] w-[236px] ' onClick={handleAddToCart}>
          Add to Cart
        </Button>
  </div>
  </div>
</div>  
<Footer/>
  </>   
  );
};

export default ProductDetails;
