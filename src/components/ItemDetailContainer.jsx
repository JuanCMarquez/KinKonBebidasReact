import React, { useEffect, useState } from "react";
import { fakeApiCallById } from '../utils/fakeApiCall';
import products from '../utils/MocksAsync.json'; // Importa products
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productsCharged, setProductsCharged] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fakeApiCallById(products, id).then(resp => { setProductsCharged(resp); setLoading(false); });
  }, []);

  if (loading) return <h1 className='text-white text-xl flex items-center justify-center p-2'> Cargando... </h1>;

  return (
    <div className='text-white text-xl flex items-center justify-center p-2 '>
      <ItemDetail item={productsCharged} />
    </div>
  );
};

export default ItemDetailContainer;
