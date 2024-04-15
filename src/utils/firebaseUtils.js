import { getDocs, collection, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importa la referencia a tu base de datos Firestore desde tu archivo de configuración de Firebase

// Función para simular una llamada a la API que devuelve todos los productos
export const apiCallGetAllProductos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    const productos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productos;
  } catch (error) {
    console.error('Error al obtener todos los productos:', error);
    throw error; // Lanza el error para que pueda ser manejado por el componente que llama a esta función
  }
};

// Función para simular una llamada a la API que devuelve un producto por su ID
export const apiCallGetProductoById = async (id) => {
  try {
    const docSnapshot = await getDoc(doc(db, 'productos', id));
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${id}:`, error);
    throw error; // Lanza el error para que pueda ser manejado por el componente que llama a esta función
  }
};

// Función para simular una llamada a la API que devuelve productos por categoría
export const apiCallGetProductosByCategoria = async (categoria) => {
  try {
    const q = query(collection(db, 'productos'), where('categoria', '==', categoria));
    const querySnapshot = await getDocs(q);
    const productos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productos;
  } catch (error) {
    console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
    throw error; // Lanza el error para que pueda ser manejado por el componente que llama a esta función
  }
};