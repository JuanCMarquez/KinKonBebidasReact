
import React, { useContext } from 'react';
import iconoCarrito from '../assets/images/iconocarrito.png';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  console.log('Total de items en el carrito:', totalItems);

  return (
    <div className='flex flex-col items-center'>
      <span className='text-white'>{totalItems}</span>
      <img className='flex w-[70px] p-0' src={iconoCarrito} alt="iconocarrito" />
    </div>
  );
};

export default CartWidget;