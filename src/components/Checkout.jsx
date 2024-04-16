import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CheckoutForm() {
    const { cart } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [orderId, setOrderId] = useState(null);

    // Calcular el monto total utilizando el contexto del carrito
    const totalAmount = cart.reduce((total, item) => {
        const precio = parseFloat(item.precio) || 0;
        const cantidad = parseFloat(item.cantidad) || 0;
        if (!isNaN(precio) && !isNaN(cantidad)) {
            return total + (precio * cantidad);
        } else {
            return total;
        }
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generar un ID de orden aleatorio
        const newOrderId = generateOrderId();
        // Mostrar la orden al usuario como una alerta
        alert(`¡Orden generada!
        Tu ID de orden es: ${newOrderId}
        Productos adquiridos:\n${cart.map(item => `${item.nombre} - Cantidad: ${item.cantidad}`).join('\n')}
        Monto total: ${totalAmount}`);
        // Guardar el ID de orden en el estado
        setOrderId(newOrderId);
    };

    const generateOrderId = () => {
        // Lógica para generar un ID de orden aleatorio
        return Math.random().toString(36).substr(2, 9);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <div className="mt-40 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"> {/* Contenedor principal */}
            <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2> {/* Título del formulario */}
            {orderId && ( /* Mensaje de orden generada */
                <div className="mb-4 text-center">
                    <p className="text-green-500">¡Orden generada! Tu ID de orden es: {orderId}</p>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4"> {/* Formulario */}
                <div> {/* Campo de Nombre */}
                    <label htmlFor="name" className="block mb-1">Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div> {/* Campo de Teléfono */}
                    <label htmlFor="phone" className="block mb-1">Teléfono:</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div> {/* Campo de Email */}
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">Enviar</button> {/* Botón de enviar */}
            </form>
        </div>
    );
}

export default CheckoutForm;