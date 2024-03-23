import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import categories from '../utils/MocksAsync.json';
import { fakeApiCall } from '../utils/fakeApiCall.js';
import ItemCount from '../components/ItemCount.jsx';

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productsPorCategoria, setProductsPorCategoria] = useState([]);

  useEffect(() => {
    setLoading(true);
    fakeApiCall(categories).then(() => {
      setLoading(false);
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

  const handleAddToCart = (productId, quantity) => {
    console.log(`Agregando ${quantity} unidades del producto ${productId} al carrito`);
  };

  return (
    <>
      <div className="container">
        <h1 className='text-white text-2xl flex items-center justify-center p-4 text-shadow-md'>
          {categoryName ? categoryName : "Bebidas de la selva"}
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {
            productsPorCategoria.map((producto) => (
              <div key={producto.id} className="col">
                <div className="card">
                  <div className="card-body d-flex flex-column align-items-center">
                    <Link to={`/item/${producto.id}`} className="text-decoration-none">
                      <h5 className="card-title text-center text-2xl text-black fw-bold hover-red mb-4">{producto.nombre}</h5>
                    </Link>
                    <ItemCount stock={producto.stock} initial={0} onAdd={(quantity) => handleAddToCart(producto.id, quantity)} />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;