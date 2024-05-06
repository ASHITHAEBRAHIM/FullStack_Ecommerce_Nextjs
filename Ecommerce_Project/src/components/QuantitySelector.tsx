import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="border w-24 bg-gray-200 rounded-full">
      <div className="flex justify-center items-center text-black text-base">
        <button className="focus:outline-none md:px-4 px-2 py-2" onClick={onDecrement}>
          -
        </button>
        <span>{quantity}</span>
        <button className="focus:outline-none md:px-4 px-2 py-2" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
