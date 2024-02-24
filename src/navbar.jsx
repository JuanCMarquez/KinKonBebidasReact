import React, { useState } from 'react'
import './index.css'

const Navbar = () => {
  const [showProductos, setShowProductos] = useState(false);
  const [showContactos, setShowContactos] = useState(false);

  return (
    <nav className='bg-black py-4 w-full'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='h-[24%] w-[24%] p-0 items-left'>
          <img src="./src/assets/images/logokikonblanco2.png" alt="Icono Gorila Color" />
        </div>
        <div className='flex justify-center items-center flex-grow'>
          <img className='p-3 h-[6.5%] w-[6.5%]' src="src/assets/images/lupablanca2.png" alt="lupaNav" />
          <form className='bg-white p-3 h-[25%] w-[65%] rounded'>
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
                    <button>Cerveza</button>
                  </li>
                  <li className='text-black p-1'>
                    <button>Vodka</button>
                  </li>
                  <li className='text-black p-1'>
                    <button>Gin</button>
                    </li>
                  <li className='text-black p-1'>
                    <button>Whisky</button>
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
          <img src="" alt="" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;