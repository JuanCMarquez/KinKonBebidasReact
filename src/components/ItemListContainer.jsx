import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from '../utils/MocksAsync.json';
import { fakeApiCall } from '../utils/fakeApiCall.js';

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productsPorCategoria, setProductsPorCategoria] = useState([]);

  useEffect(() => {
    setLoading(true); // Establece el estado de carga como verdadero al iniciar la llamada a la API
    fakeApiCall(categories).then(() => {
      setLoading(false); // Establece el estado de carga como falso cuando la llamada a la API se completa
      if (!id) {
        setProductsPorCategoria(categories.productos);
      } else {
        setProductsPorCategoria(getProductosByCategory(id));
      }
    });
  }, [id]);

  if (loading) return <h1 className='text-white text-xl flex items-center justify-center'>Cargando...</h1>;

  const getCategoryById = (categoryId) => {
    return categories.categorias.find(cat => cat.id.toString() === categoryId);
  }

  const getCategoryName = (categoryId) => {
    const category = getCategoryById(categoryId);
    return category ? category.nombre : '';
  }

  const getProductosByCategory = (categoryId) => {
    if (categoryId) {
      return categories.productos.filter((product) => product.categoria === parseInt(categoryId))
    }
  }

  const categoryName = getCategoryName(id);

  return (
    <>
      <div>
        <h1 className='text-white text-xl flex items-center justify-center p-4 text-shadow-md'>{categoryName}</h1>
        {
          productsPorCategoria.map((producto) => (
            <Link key={producto.id} to={`/item/${producto.id}`}>
              <h2 className='text-white text-xl  hover:text-red-600 flex items-center justify-center'>{producto.nombre}</h2>
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default ItemListContainer;