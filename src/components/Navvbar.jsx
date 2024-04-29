import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/images/logo2KINKON.png';
import lupa from '../assets/images/lupablanca2.png';

const Navbar = ({ loading }) => {
  const [showProductos, setShowProductos] = useState(false);
  const [showContactos, setShowContactos] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedCategories, setSuggestedCategories] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const productosRef = useRef(null);
  const contactosRef = useRef(null);

  const categorias = [
    { id: 1, nombre: 'Cerveza' },
    { id: 2, nombre: 'Vodka' },
    { id: 3, nombre: 'Gin' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowContactos(false);
      setShowProductos(false);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredCategories = categorias.filter(category =>
      category.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedCategories(filteredCategories);
  };

  const handleCategorySelection = (category) => {
    setSearchTerm(category.nombre);
    setSuggestedCategories([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      window.location.href = '/';
    } else {
      const matchedCategory = categorias.find(category => category.nombre.toLowerCase() === searchTerm.toLowerCase());
      if (matchedCategory) {
        window.location.href = `/category/${matchedCategory.id}`;
      } else {
        window.location.href = "/";
      }
    }
  };

  const handleLupaClick = () => {
    if (searchTerm.trim() !== '') {
      // Manejar búsqueda
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      // Manejar tecla de flecha hacia arriba
    } else if (event.key === 'ArrowDown') {
      // Manejar tecla de flecha hacia abajo
    } else if (event.key === 'Enter') {
      // Manejar tecla de enter
    }
  };

  return (
    <nav className='bg-black py-4 w-full fixed top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center flex-grow'>
        <div className='h-[24%] w-[24%] p-0 items-left'>
          <Link to="/">
            <img src={logo} alt="Icono Gorila Color" className="h-auto w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 flex-grow" />
          </Link>
        </div>
        <div className='hidden lg:flex justify-center items-center flex-grow'>
          <button className='p-3 h-auto w-auto border-none bg-transparent' onClick={handleLupaClick}>
            <img src={lupa} alt="lupaNav" className="h-auto w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14" />
          </button>
          <form className='bg-white p-3 h-full w-full rounded flex-grow justify-center items-center' onSubmit={handleSubmit}>
            <input
              className='bg-white p-1 h-[40%] w-full type="text"'
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {suggestedCategories.length > 0 && (
              <ul
                className='absolute bg-white border border-black text-xl p-2 rounded-xl max-w-[200px]'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {suggestedCategories.map((category, index) => (
                  <li
                    key={category.id}
                    className={`text-black cursor-pointer ${isHovered && index === activeSuggestion ? 'bg-gray-200' : ''}`}
                    onClick={() => handleCategorySelection(category)}
                  >
                    <Link to={`/category/${category.id}`}>
                      {category.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>

        <div className='ml-4 flex items-center justify-end p-6 relative'>

          <button className='text-white text-xl hover:text-green-400' onClick={() => setShowProductos(!showProductos)}> Productos</button>

          {loading && <div className="text-white mt-40">Cargando...</div>}
          {!loading && showProductos && (
            <ul
              ref={productosRef}
              className='absolute bg-white border border-black text-xl p-3 rounded-xl right-[10px] top-[60px]'
              style={{ cursor: 'pointer' }}
            >
              {categorias.map(category => (
                <li key={category.id} className='text-black pb-1'>
                  <span className='hover:underline' onClick={() => handleCategorySelection(category)}>
                    <Link to={`/category/${category.id}`}>
                      {category.nombre}
                    </Link>
                  </span>
                </li>
              ))}
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