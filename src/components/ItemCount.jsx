/*Permite agregar o sacar productos desde los contenedores principales al carrito*/
import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleCountChange = (value) => {
    const newCount = count + value;
    if (newCount >= 0 && newCount <= stock) {
      setCount(newCount);
    } else if (newCount < 0) {
      setCount(0);
    }
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div>
      <button onClick={() => handleCountChange(-1)} disabled={count <= 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => handleCountChange(+1)} disabled={count >= stock}>
        +
      </button>
      <button onClick={handleAdd} disabled={count <= 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;