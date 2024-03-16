import React, { useEffect, useState } from "react";
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

  if (loading) return <h1 className='text-white text-xl flex items-center justify-center'>Cargando...</h1>


  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId))
    }
  }

  //Lógica para el detalle de un ítem

  const productsPorCategoria = getProductosByCategory(id)

  return (<>
    <div>
      <h1 className='text-white text-xl flex items-center justify-center p-4 text-shadow-md'>Categorías</h1>
      <div>
        {response.categorias.map((cat) => {
          return <Link key={cat.id} to={`/category/${cat.id}`}>
            <h2 className='text-white text-xl  hover:text-green-400 flex items-center justify-center text-shadow-md'>{cat.nombre}</h2>
          </Link>
        })}
      </div>
    </div>
    {
      productsPorCategoria && (
        productsPorCategoria.map((producto) => {
          console.log(producto)
          return (<Link key={producto.id} to={`/item/${producto.id}`}>
            <h2 className='text-white text-xl  hover:text-red-600 flex items-center justify-center'>{producto.nombre}</h2>
          </Link>)
        })
      )
    }

  </>);
}

export default ItemListContainer;

