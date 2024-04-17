import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    const [compraCancelada, setCompraCancelada] = useState(false);

    const handleCancelarCompra = () => {
        setCompraCancelada(true);
        clearCart();
    };

    const handleContinuarCompra = () => {
        setCompraCancelada(false);
    };

    const totalAmount = cart.reduce((total, item) => {
        const price = parseFloat(item.precio) || 0;
        const quantity = parseFloat(item.cantidad) || 0;
        if (!isNaN(price) && !isNaN(quantity)) {
            return total + (price * quantity);
        } else {
            return total;
        }
    }, 0);

    return (
        <div className="card card-body rounded-lg flex flex-col items-center justify-center border-1 border-black mx-auto" style={{ marginTop: '160px', marginBottom: '90px', width: '60%' }}>
            <h2 className="text-xl p-3">Carrito de compras</h2>
            <ul className="list-group">
                {cart.map(item => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center text-black">
                            <span>{item.nombre} - Cantidad: {item.cantidad} - Precio unitario: ${item.precio}</span>
                            <button className="btn btn-danger ml-3" onClick={() => removeItem(item.id)}>X</button>
                        </li>
                    );
                })}
            </ul>
            <p className="mt-4">Total: ${totalAmount}</p>
            <div className="mt-4">
                {compraCancelada ? (
                    <div>
                        <img src="ruta/a/tu/imagen.jpg" alt="Imagen" />
                        <button className="btn btn-primary me-2" onClick={handleContinuarCompra}>Continuar compra</button>
                    </div>
                ) : (
                    <>
                        <div className='p-3'>
                            {cart.length > 0 ? (
                                <Link to="/checkout" className="btn btn-primary me-2">Finalizar compra</Link>
                            ) : (
                                <button className="btn btn-primary me-2" disabled>Finalizar compra</button>
                            )}
                            <Link to="/">
                                <button className="btn btn-secondary" onClick={handleCancelarCompra}>Cancelar compra</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;