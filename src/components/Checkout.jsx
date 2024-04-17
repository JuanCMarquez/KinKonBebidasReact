import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

function CheckoutForm() {
    const { cart, clearCart } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [orderId, setOrderId] = useState(null);

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
        if (cart.length === 0) {
            Swal.fire({
                title: '¡Debes agregar nuestros productos para generar tu orden, hermano gorila!',
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: 'Agregar productos',
                cancelButtonColor: '#3085d6',
                cancelButtonAriaLabel: 'Agregar productos',
                showConfirmButton: false
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                    window.location.href = '/';
                }
            });
            return;
        }
        const newOrderId = generateOrderId();
        Swal.fire({
            title: '¡Orden generada!',
            html: `
                <p>Tu ID de orden es: ${newOrderId}</p>
                <p>Productos adquiridos:</p>
                <ul>${cart.map(item => `<li>${item.nombre} - Cantidad: ${item.cantidad}</li>`).join('')}</ul>
                <p>Monto total: ${totalAmount}</p>
            `,
            icon: 'success'
        }).then(() => {
            clearCart();
            Swal.fire({
                title: '¡Orden generada! ¿Deseas seguir comprando?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, seguir comprando',
                cancelButtonText: 'No, gracias',
                cancelButtonColor: '#d33',
                confirmButtonColor: '#3085d6',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/';
                }
            });
        });
        setOrderId(newOrderId);
    };

    const generateOrderId = () => {
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
        <div className="mt-40 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
            {orderId && (<div className="mb-4 text-center">
                <p className="text-green-500">¡Orden generada! Tu ID de orden es: {orderId}</p>
            </div>)}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
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
                <div>
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
                <div>
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
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">Enviar</button>
            </form>
        </div>
    );
}

export default CheckoutForm;