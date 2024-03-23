import React from 'react'; // Asegúrate de importar React
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const handleAdd = (count) => {
    console.log(`Agregados ${count} productos al carrito`);
  };

  return (
    <>
      <div className="mx-auto my-auto">
        <div className="card text-center" style={{ width: '18rem' }}>
          <div className="card-body">
            <h3 className="card-title fw-bold p-1 text-2xl ">{item.nombre}</h3>
            <p className="card-text p-2">Precio: {item.precio}</p>
            <p className="card-text p-2">Descripción: {item.descripcion}</p>
            <div className="d-flex justify-content-between align-items-center">
              <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;