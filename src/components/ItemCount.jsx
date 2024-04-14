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

  const handleReset = () => {
    setCount(0);
  };

  const handleAddToCart = () => {
    handleAdd();
    handleReset(); // Llamar a la función handleReset después de agregar al carrito
  };

  return (
    <div className="text-center">
      <div className="d-inline-flex align-items-center justify-content-center mb-4" style={{ marginTop: "20px" }}>
        <button onClick={() => handleCountChange(-1)} className="btn btn-light me-2" disabled={count <= 0}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => handleCountChange(+1)} className="btn btn-light ms-2" disabled={count >= stock}>
          +
        </button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-dark btn-lg" disabled={count <= 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;