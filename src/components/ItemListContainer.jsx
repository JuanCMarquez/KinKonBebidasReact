import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../main';
import '../components/ItemListContainer.css'

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productsPorCategoria, setProductsPorCategoria] = useState([]);
  const [categoriaNombre, setCategoriaNombre] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      let productos = [];

      if (id) {
        const categoriaDoc = await getDocs(collection(db, 'categorias'));
        const categoria = categoriaDoc.docs.find(doc => doc.id === id);
        if (categoria) {
          setCategoriaNombre(categoria.data().nombre);
        }

        const q = query(collection(db, 'productos'), where('categoriaId', '==', parseInt(id)));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          productos.push({ id: doc.id, ...doc.data() });
        });
      } else {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        querySnapshot.forEach((doc) => {
          productos.push({ id: doc.id, ...doc.data() });
        });
      }

      setProductsPorCategoria(productos);
      setLoading(false);
    };

    fetchProductos();
  }, [id]);

  if (loading) return <h1 className='text-white text-xl flex items-center justify-center mt-60'>Cargando...</h1>;

  return (
    <div id="itemListContainer">
      <h1 id="pageTitle">
        {categoriaNombre || "Bebidas de la selva"}
      </h1>
      <div id="productGrid">
        {productsPorCategoria.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
            <div className="card-body">
              <Link to={`/item/${producto.id}`} className="text-decoration-none">
                <h5 className="card-title">{producto.nombre}</h5>
              </Link>
              <Link to={`/item/${producto.id}`} className="text-decoration-none">
                <button className="btn">Ver detalles</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;