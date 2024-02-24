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
          <form className='bg-white p-3 h-[25%] w-[45%] rounded'>
            <input className='bg-white p-1 h-[20%] w-full type="text"'/>
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