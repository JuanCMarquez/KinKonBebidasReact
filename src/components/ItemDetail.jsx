import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {


  const handleAdd = () => {
    console.log('agregar al carrito')
  }

  return (<>
    <div className="mx-auto my-auto">
      <div className="mx-auto my-auto text-white text-xl flex items-center justify-center text-shadow-md p-3">
        {item.nombre}
      </div>
      <div className="mx-auto my-auto text-white text-xl flex items-center justify-center text-shadow-md p-2">
        {item.precio}
      </div>
      <div className="mx-auto my-auto text-white text-xl flex items-center justify-center text-shadow-md p-2"> 
        {item.descripcion}
      </div>
      <div className="mx-auto my-auto text-white text-xl flex items-center justify-center text-shadow-md p-2">
        <button><ItemCount stock={item.stock} initial={0} onAdd={handleAdd} /></button>
      </div>
    </div>
  </>);

}

//Detalle de producto. Tarjeta.