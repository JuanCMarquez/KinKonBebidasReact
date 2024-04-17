import React, { useContext } from 'react';
import iconoCarrito from '../assets/images/iconocarrito.png';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  console.log('Contenido del carrito:', cart);

  const totalItems = cart.reduce((total, item) => {
    console.log('Cantidad del ítem:', item.cantidad);
    return total + parseInt(item.cantidad || 0);
  }, 0);

  console.log('Total de items en el carrito:', totalItems);

  return (
    <div className='flex flex-col items-center p-1'>
      <span className='text-white text-lg md:text-xl lg:text-xl'>{isNaN(totalItems) ? 0 : totalItems}</span>
      <img className='flex w-[70px] p-0' src={iconoCarrito} alt="iconocarrito" />
    </div>
  );
};

export default CartWidget;