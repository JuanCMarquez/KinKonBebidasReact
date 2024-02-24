import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <nav className='bg-black py-4 w-full'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='h-[24%] w-[24%] p-0 items-left'>
          <img src="./src/assets/images/logokikonblanco2.png" alt="Icono Gorila Color" />
        </div>
        <div className='flex justify-center items-center flex-grow'>
          <img className='p-3 h-[6.5%] w-[6.5%]' src="src/assets/images/lupablanca2.png" alt="lupaNav" />
          <form className='bg-white p-3 h-[25%] w-[65%] w-1/2 rounded'>
            <input className='bg-white p-1 h-[20%] w-full type="text"'/>
          </form>
        </div>
        <ul>
          <li className='text-white'>Productos</li>
          <li className='text-white'>Contacto</li>
          <li className='text-white'>Carrito</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;