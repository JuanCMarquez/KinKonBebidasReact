import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (count) => {
    console.log(`Agregados ${count} productos al carrito`);
    setAddedToCart(true);
  };

  return (
    <div className="mx-auto my-auto">
      <div className="card text-center" style={{ width: '25rem', marginTop: '136px' }}>
        <div className="card-body">
          <h3 className="card-title fw-bold p-1 text-3xl ">{item.nombre}</h3>
          <img src={item.imagen} className="card-img-top text-center" alt="Producto" />
          <p className="card-text p-2">Precio: {item.precio}</p>
          <p className="card-text p-2">Descripción: {item.descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            {!addedToCart && (
              <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
            )}
            {addedToCart && item.stock > 0 && (
              <Link to="/cart" className="btn btn-primary">Terminar compra</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;