import React, { useEffect, useState } from 'react';
import Item from '..Item';
import { Card, CardContent, Typography } from '@mui/material'; // Importamos los componentes de tarjetas de Material-UI

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* Contenedor de las tarjetas con estilos flexibles */}
            {productos.map(producto => (
                <Card key={producto.id} style={{ maxWidth: '300px', minWidth: '200px' }}> {/* Tarjeta de Material-UI */}
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {producto.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {producto.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ItemList;