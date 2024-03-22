import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import { fakeApiCall } from '../utils/fakeApiCall.js';

const ItemList = ({ productos }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fakeApiCall(productos).then(() => {
            setLoading(false);
        });
    }, [productos]);

    if (loading) return <h1 className='text-white text-xl flex items-center justify-center'>Cargando...</h1>;

    return (
        <div>
            {productos.map(producto => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default ItemList;