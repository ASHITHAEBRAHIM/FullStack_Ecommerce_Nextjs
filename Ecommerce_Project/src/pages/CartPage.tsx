import Header from '../components/Header';
import QuantitySelector from '../components/QuantitySelector';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { useMediaQuery } from 'react-responsive';
import useCartStore from '../cart';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCartStore();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const deleteButtonSize = isMobile ? 16 : 24;

  const handleIncrement = (itemId: number) => {
    const selectedCartItem = cartItems.find((item) => item.id === itemId);
    if (selectedCartItem) {
      updateCartItemQuantity(itemId, selectedCartItem.quantity + 1);
    }
  };

  const handleDecrement = (itemId: number) => {
    const selectedCartItem = cartItems.find((item) => item.id === itemId);
    if (selectedCartItem) {
      updateCartItemQuantity(itemId, Math.max(selectedCartItem.quantity - 1, 1));
    }
  };

  const handleDelete = (itemId: number) => {
    removeFromCart(itemId);
  };
  const calculateOrderSummary = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = subtotal * 0.2; // 20% discount
    const deliveryCharge = 15;
    const total = subtotal - discount + deliveryCharge;
    return { subtotal, discount, deliveryCharge, total };
  };
  
  const orderSummary = calculateOrderSummary();
  return (
    <div className='md:w-full w-[398px] mx-auto'>
        <Header/>
        <hr className='border-t border-gray-300 my-6 md:w-full w-[398px] md:mx-8 mx-auto' />
      <h2 className='font-lilita md:text-[40px] text-[32px] font-bold md:ml-24 ml-6'>YOUR CART</h2>
      {cartItems.length === 0 ? (
        <p className='md:ml-24 ml-4 mt-4 md:text-xl text-base text-center font-bold'>No items in the cart</p>
      ) : (
      <div className='md:flex'>
        <div>
        {cartItems.map((cartItem) => (
      <div
      key={cartItem.id}
      className="flex relative border md:w-[715px] w-[358px] mx-auto px-6 py-6 border-gray-400 md:ml-24 md:mt-11 mt-5">
      <div><img className='md:h-[124px] md:w-[124px] w-[99px] h-[99px]' src={cartItem.image}/></div>
      <div className='pl-4'>
      <p className='md:text-xl text-base font-bold'>{cartItem.title}</p>
      <p className='text-xs md:text-sm mt-1'>Size: {cartItem.size}</p>
      <p className='text-xs md:text-sm mt-0.5'>Color: {cartItem.color}</p>
      <p className='md:text-2xl text-xl font-bold mt-1'>{cartItem.price}</p>
      </div>

      <div>
        <div>
        <AiOutlineDelete
        className='cursor-pointer text-red-500 absolute top-4 right-4'
        size={deleteButtonSize}
        onClick={() => handleDelete(cartItem.id)}/>
        </div>
      <div className='absolute bottom-4 right-4'>
      <QuantitySelector
            quantity={cartItem.quantity}
            onIncrement={() => handleIncrement(cartItem.id)}
            onDecrement={() => handleDecrement(cartItem.id)}
          />
      </div>
      </div>
      </div>
       ))}
        </div>


        <div>
            <div className='border px-6 py-6 md:w-[505px] w-[358px] border-gray-400 md:ml-24 ml-6 md:mt-11 mt-5 '>
              <h3 className='md:text-2xl text-xl font-bold'>Order Summary</h3>

              <div className='flex justify-between items-center mt-6'>
                <div className='md:text-xl text-base text-gray-400'>Subtotal</div>
                <div className='md:text-xl text-base font-bold '>${orderSummary.subtotal.toFixed(2)}</div>
              </div>

              <div className='flex justify-between items-center mt-5'>
                <div className='md:text-xl text-base text-gray-400'>Discount(-20%) </div>
                <div className='md:text-xl text-base font-bold text-red-500'>
                  -${orderSummary.discount.toFixed(2)}
                </div>
              </div>

              <div className='flex justify-between items-center mt-5'>
                <div className='md:text-xl text-base text-gray-400'>Delivery Charge</div>
                <div className='md:text-xl text-base font-bold'>
                  ${orderSummary.deliveryCharge.toFixed(2)}
                </div>
              </div>
              <div className='mt-5 border border-b ' />

              <div className='flex justify-between items-center mt-5'>
                <div className='md:text-xl text-base'>Total</div>
                <div className='md:text-xl text-base font-bold'>${orderSummary.total.toFixed(2)}</div>
              </div>
              <Button className='bg-black md:text-base text-sm text-white font-satoshi rounded-full mt-6 px-12 py-3 md:w-[450px] w-[318px]'>
                Go to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CartPage;
