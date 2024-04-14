import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    // Calcula el total de dinero
    const totalAmount = cart.reduce((total, item) => {
        // Convierte el precio y la cantidad a números decimales
        const price = parseFloat(item.price) || 0;
        const quantity = parseFloat(item.quantity) || 0;

        // Realiza el cálculo solo si el precio y la cantidad son números válidos
        if (!isNaN(price) && !isNaN(quantity)) {
            return total + (price * quantity);
        } else {
            return total;
        }
    }, 0);

    return (
        <div className="container mx-auto mt-32 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
            <ul className="list-group">
                {cart.map(item => {
                    console.log('Precio:', item.price);
                    console.log('Cantidad:', item.quantity);
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{item.nombre} - Cantidad: {item.quantity} - Precio unitario: ${item.price}</span>
                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</button>
                        </li>
                    );
                })}
            </ul>
            <p className="mt-4">Total: ${totalAmount}</p>
            <div className="mt-4">
                <Link to="/checkout" className="btn btn-primary me-2">Finalizar compra</Link>
                <button className="btn btn-secondary" onClick={() => clearCart()}>Cancelar compra</button>
            </div>
        </div>
    );
};

export default Cart;