import React, { useState } from 'react'
import '../index.css'
import CartWidget from './CartWidget';
import logo from '../assets/images/logo2KINKON.png'
import lupa from '../assets/images/lupablanca2.png'

const NavBar = () => {
  const [showProductos, setShowProductos] = useState(false);
  const [showContactos, setShowContactos] = useState(false);

  return (
    <nav className='bg-black py-4 w-full'>
      <div className='container mx-auto flex justify-between items-center flex-grow'>
        <div className='h-[24%] w-[24%] p-0 items-left'>
          <img src={logo} alt="Icono Gorila Color" />
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
              <button className='text-white text-xl hover:text-green-400' href="" onClick={() => setShowProductos(!showProductos)}> Productos</button>
              {showProductos && (
                <ul className='absolute bg-white border border-black text-xl w-[9%] p-3 rounded-xl'>

                  <li className='text-black pb-1'>
                    <button>
                      <span className='hover:underline'>Cerveza</span>
                    </button>
                  </li>
                  <li className='text-black p-1'>
                    <button>
                      <span className='hover:underline'>Vodka</span>
                    </button>
                  </li>
                  <li className='text-black p-1'>
                    <button>
                      <span className='hover:underline'>Gin</span>
                    </button>
                  </li>
                  <li className='text-black p-1'>
                    <button>
                      <span className='hover:underline'>Whisky</span>
                    </button>
                  </li>

                </ul>
              )
              }
            </li>
          </ul>
        </div>

        <div className='ml-30 flex items-center justify-end p-6'>
          <ul className='flex space-x-4 justify-end'>
            <li>
              <button className='text-white text-xl  hover:text-green-400' href="" onClick={() => setShowContactos(!showContactos)}> Contacto</button>
              {showContactos && (
                <ul className='absolute bg-white border border-black text-xl w-[9%] p-3 rounded-xl'>

                  <li className='text-black'>WhatsApp: 351621723</li>

                </ul>
              )
              }
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