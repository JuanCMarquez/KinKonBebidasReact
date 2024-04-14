import React from 'react';
import iconoCarrito from '../assets/images/iconocarrito.png';
//import { CartContext } from '../context/CartContext.jsx';

const CartWidget = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
      <span className='text-white'>(25)</span>
        <img className='flex w-[70px] p-0' src={iconoCarrito} alt="iconocarrito" />
      </div>
    </>
  );
};

export default CartWidget;