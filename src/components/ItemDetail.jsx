import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (count) => {
    const newItem = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: count,
    };
    addItem(newItem);
    setAddedToCart(true);
  };

  /*funcion on had funcion on remove*/

  return (
    <div className="mx-auto my-auto mt-3">
      <div className="card text-center card-body rounded-lg flex items-center justify-center w-full max-w-xl mx-auto border-3 border-black" style={{ marginTop: '22%' }}>
        <h3 className="card-title fw-bold mt-3 mb-0 p-1 text-5xl text-black">{item.nombre}</h3>
        <img src={item.imagen} className="card-img-top text-center" alt="Producto" style={{ width: '50%', height: '50%' }} />
        <p className="card-text p-2 text-black text-2xl">Precio: {item.precio}</p>
        <p className="card-text p-2 mt-2 text-2xl text-black">Descripción: {item.descripcion}</p>
        <div className="d-flex justify-content-between align-items-center text-black mt-3 mb-1">
          {!addedToCart && (
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
          )}
        </div>
        <div>
          {addedToCart && item.stock > 0 && (
            <div className="flex justify-center">
              <Link to="/cart" className="btn btn-dark btn-lg">Terminar compra</Link>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default ItemDetail;