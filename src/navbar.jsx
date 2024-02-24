import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <nav className='bg-indigo-400 py-4 w-full'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <img src="" alt="" />
        </div>
        <div className='flex justify-center items-center flex-grow'>
          <img src="" alt="" />
          <form action="">
            <input type="text" />
          </form>
        </div>
        <ul>
          <li>Productos</li>
          <li>Contacto</li>
          <li>Carrito</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;