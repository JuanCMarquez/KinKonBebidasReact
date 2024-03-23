import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import categories from '../utils/MocksAsync.json';
import { fakeApiCall } from '../utils/fakeApiCall.js';
import logo from '../assets/images/logo2KINKON.png';
import lupa from '../assets/images/lupablanca2.png';

const NavBar = () => {
  const [showProductos, setShowProductos] = useState(false);
  const [showContactos, setShowContactos] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeApiCall(categories).then(() => {
      setLoading(false);
    });
  }, []);


  return (
    <nav className='bg-black py-4 w-full'>
      <div className='container mx-auto flex justify-between items-center flex-grow'>
        <div className='h-[24%] w-[24%] p-0 items-left'>
          <Link to="/">
            <img src={logo} alt="Icono Gorila Color" />
          </Link>
        </div>
        <div className='flex justify-center items-center flex-grow'>
          <button className='p-3 h-[7%] w-[7%] border-none bg-transparent'>
            <img src={lupa} alt="lupaNav" />
          </button>
          <form className='bg-white p-3 h-[25%] w-[85%] rounded'>
            <input className='bg-white p-1 h-[20%] w-full type="text"' />
          </form>
        </div>

        <div className='ml-30 flex items-center justify-end p-6'>
          <ul className='flex space-x-4 justify-end'>
            <li>
              <button className='text-white text-xl hover:text-green-400' onClick={() => setShowProductos(!showProductos)}> Productos</button>
              {showProductos && (
                <ul className='absolute bg-white border border-black text-xl w-[9%] p-3 rounded-xl'>
                  <li className='text-black pb-1'>
                    <Link to="/category/1">
                      <span className='hover:underline'>Cerveza</span>
                    </Link>
                  </li>
                  <li className='text-black p-1'>
                    <Link to="/category/2">
                      <span className='hover:underline'>Vodka</span>
                    </Link>
                  </li>
                  <li className='text-black p-1'>
                    <Link to="/category/3">
                      <span className='hover:underline'>Gin</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className='ml-30 flex items-center justify-end p-6'>
          <ul className='flex space-x-4 justify-end'>
            <li>
              <button className='text-white text-xl hover:text-green-400' onClick={() => setShowContactos(!showContactos)}> Contacto</button>
              {showContactos && (
                <ul className='absolute bg-white border border-black text-xl w-[9%] p-3 rounded-xl'>
                  <li className='text-black'>WhatsApp: 351621723</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;