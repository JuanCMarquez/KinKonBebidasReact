import React from 'react'
import './index.css'

const Navbar = () => {
    return (
      <nav>
        <ul className='container bg-red-500'>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;