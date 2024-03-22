import React, { useEffect, useState } from 'react';

const Item = ({ producto }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setLoading(false);
    }, [producto]);

    if (loading) return <h1 className='text-white text-xl flex items-center justify-center'>Cargando...</h1>;

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            {/* Puedes agregar más detalles del producto aquí, como imágenes, opciones de compra, etc. */}
        </div>
    );
};

export default Item;