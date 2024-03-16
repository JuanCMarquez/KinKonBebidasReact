//agrupador de componentes

import React, { useEffect, useState } from "react";
import products from '../utils/MocksAsync.json';
import { fakeApiCallById } from '../utils/fakeApiCall';
import { ItemDetail } from "./ItemDetail";
import { Link, useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [productsCharged, setProductsCharged] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    fakeApiCallById(products, id).then(resp => { setProductsCharged(resp); setLoading(false) })


  }, [])

  if (loading) return <h1 className='text-white text-xl flex items-center justify-center p-2'> Cargando... </h1>


  return (<>

    <div className='text-white text-xl flex items-center justify-center p-2'>
      {
        //productsCharged.productos.length > 0 && productsCharged.productos((item) => {
        //return <ItemDetail item={item} />
      }

      <ItemDetail item={productsCharged} />

    </div>

  </>);
}

export default ItemDetailContainer;