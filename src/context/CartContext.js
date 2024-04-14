import React, { createContext, useContext, useState } from "react";

// Creamos el contexto del carrito
export const CartContext = createContext();

// Creamos el proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un item al carrito
  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.item.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  // Función para remover un item del carrito
  const removeItem = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    setCart(updatedCart);
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función para verificar si un item está en el carrito
  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.item.id === itemId);
  };

  // Creamos el objeto de valor del contexto
  const cartContextValue = {
    cart,
    addItem,
    removeItem,
    clearCart,
    isInCart,
  };

  // Proveemos el contexto y su valor a los componentes hijos
  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};