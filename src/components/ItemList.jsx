import React, { useEffect, useState } from 'react';
import Item from '../components/Item';


const ItemList = ({ productos }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('productos').get(); // Obtiene todos los documentos de la colección 'productos'
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapea los documentos a objetos de datos
                setData(data);
            } catch (error) {
                console.error('Error al obtener datos de Firebase:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productos]);

    if (loading) return <h1 className='text-white text-xl flex items-center justify-center'>Cargando...</h1>;

    return (
        <div>
            {data.map(producto => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default ItemList;