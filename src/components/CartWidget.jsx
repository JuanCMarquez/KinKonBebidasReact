import React, { useContext } from 'react';
import iconoCarrito from '../assets/images/iconocarrito.png';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  // Accedemos al contexto del carrito usando useContext
  const { cart } = useContext(CartContext);

  console.log('Contenido del carrito:', cart);

  // Calculamos el total de elementos en el carrito usando reduce
  const totalItems = cart.reduce((total, item) => {
    console.log('Cantidad del ítem:', item.cantidad); // Usamos 'cantidad' en lugar de 'quantity'
    return total + parseInt(item.cantidad || 0); // Usamos 'cantidad' en lugar de 'quantity'
  }, 0);

  console.log('Total de items en el carrito:', totalItems);

  return (
    <div className='flex flex-col items-center'>
      <span className='text-white'>{isNaN(totalItems) ? 0 : totalItems}</span>
      <img className='flex w-[70px] p-0' src={iconoCarrito} alt="iconocarrito" />
    </div>
  );
};

export default CartWidget;