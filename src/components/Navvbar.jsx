import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/images/logo2KINKON.png';
import lupa from '../assets/images/lupablanca2.png';

const Navbar = ({ loading }) => {
  const [showProductos, setShowProductos] = useState(false);
  const [showContactos, setShowContactos] = useState(false);
  const productosRef = useRef(null);
  const contactosRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productosRef.current && !productosRef.current.contains(event.target)) {
        setShowProductos(false);
      }
      if (contactosRef.current && !contactosRef.current.contains(event.target)) {
        setShowContactos(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowProductos(false);
      setShowContactos(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='bg-black py-4 w-full fixed top-0 z-50 flex-grow'>
      <div className='container mx-auto flex justify-between items-center flex-grow'>
        <div className='h-[24%] w-[24%] p-0 items-left'>
          <Link to="/">
            <img src={logo} alt="Icono Gorila Color" className="h-auto w-auto flex-grow" />
          </Link>
        </div>
        <div className='hidden lg:flex justify-center items-center flex-grow'>
          <button className='p-3 h-auto w-auto border-none bg-transparent'>
            <img src={lupa} alt="lupaNav" className="h-auto w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14" />
          </button>
          <form className='bg-white p-3 h-full w-full rounded flex-grow justify-center items-center'>
            <input className='bg-white p-1 h-[40%] w-full type="text"' />
          </form>
        </div>

        <div className='ml-4 flex items-center justify-end p-6 relative'>
          <button className='text-white text-xl hover:text-green-400' onClick={() => setShowProductos(!showProductos)}> Productos</button>
          {loading && <div className="text-white mt-40">Cargando...</div>}
          {!loading && showProductos && (
            <ul ref={productosRef} className='absolute bg-white border border-black text-xl p-3 rounded-xl right-[10px] top-[60px]'>
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
        </div>

        <div className='ml-4 flex items-center justify-end p-6 relative'>
          <button className='text-white text-xl hover:text-green-400' onClick={() => setShowContactos(!showContactos)}> Contacto</button>
          {showContactos && (
            <ul ref={contactosRef} className='absolute bg-white border border-black text-xl p-3 rounded-xl right-0 top-[60px]'>
              <li className='text-black'>WhatsApp: 351621723</li>
            </ul>
          )}
        </div>

        <div>
          <Link to="/cart">
            <CartWidget className="h-auto w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 flex-grow" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;