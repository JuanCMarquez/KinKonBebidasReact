//agrupador de componentes

import React, { useEffect, useState } from "react";
import products from '../utils/MocksAsync.json';
import { fakeApiCall } from '../utils/fakeApiCall';
import { ItemDetail } from "./ItemDetail";


const ItemDetailContainer = () => {
  const [productsCharged, setProductsCharged] = useState({})
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)
    fakeApiCall(products).then(resp => { setProductsCharged(resp); setLoading(false) })


  }, [])

  if (loading) return <h1 className='text-white text-xl flex items-center justify-center p-2'> Cargando... </h1>


  return (<>

    <div className='text-white text-xl flex items-center justify-center p-2'>
      {
        productsCharged.productos.length > 0 && productsCharged.productos.map((item, index) => {
          return <ItemDetail item={item} />
        }

        )
      }
    </div>

  </>);
}

export default ItemDetailContainer;