/*import React from 'react'

const ItemList = () => {
    return (<h1>Hola</h1> );
}
 
export default ItemList;

Categorías globales de productos a la venta WHISKY VODKA CERVEZA.
Array de productos en Mock, asigno id y se llama en este archivo.
Info de productos está en el Mock separado. 
Dentro de este archivo debe ir slash (barra, ruta inicial*/

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from '../utils/MocksAsync.json'
import { fakeApiCall } from '../utils/fakeApiCall.js';

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fakeApiCall(categories).then(res => { setResponse(res); setLoading(false) })

  }, [])

  if (loading) return <h1>Cargando...</h1>


  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId))
    }
  }

  const productsPorCategoria = getProductosByCategory(id)

  return (<>
    <div>
      <h1>Categorias</h1>
      <div>
        {response.categorias.map((cat) => {
          return <Link key={cat.id} to={`/category/${cat.id}`}>
            <h2>{cat.nombre}</h2>
          </Link>
        })}
      </div>
    </div>
    {
      productsPorCategoria && (
        productsPorCategoria.map((producto) => {
          console.log(producto)
          return (<Link key={producto.id} to={`/item/${producto.id}`}>
            <h2>{producto.nombre}</h2>
          </Link>)
        })
      )
    }

  </>);
}

export default ItemListContainer;

