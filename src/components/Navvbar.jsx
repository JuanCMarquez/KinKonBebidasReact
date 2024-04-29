import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/images/logo2KINKON.png';
import lupa from '../assets/images/lupablanca2.png';

const Navbar = ({ loading }) => {
  const navigate = useNavigate();
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
    const handleClickOutside = (event) => {
      if (
        productosRef.current &&
        !productosRef.current.contains(event.target)
      ) {
        setShowProductos(false);
      }
      if (
        contactosRef.current &&
        !contactosRef.current.contains(event.target)
      ) {
        setShowContactos(false);
      }
    };

    const handleScroll = () => {
      setShowProductos(false);
      setShowContactos(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredCategories = categorias.filter((category) =>
      category.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedCategories(filteredCategories);
  };

  const handleCategorySelection = (category) => {
    setSearchTerm(category.nombre);
    setSuggestedCategories([]);
    navigate(`/category/${category.id}`); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (searchTerm.trim() === '') {
      navigate('/'); 
    } else {
      const matchedCategory = categorias.find(
        (category) => category.nombre.toLowerCase() === searchTerm.toLowerCase()
      );
      if (matchedCategory) {
        navigate(`/category/${matchedCategory.id}`); 
      } else {
        navigate('/'); 
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (suggestedCategories.length > 0) {
        setActiveSuggestion(
          (prev) => (prev > 0 ? prev - 1 : suggestedCategories.length - 1)
        );
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (suggestedCategories.length > 0) {
        setActiveSuggestion(
          (prev < suggestedCategories.length - 1 ? prev + 1 : 0)
        );
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (suggestedCategories.length > 0) {
        handleCategorySelection(suggestedCategories[activeSuggestion]); 
      }
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
          <form
            className='bg-white p-3 h-full w-full rounded'
            onSubmit={handleSubmit}
          >
            <input
              className='bg-white p-1 h-[40%] w-full'
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {suggestedCategories.length > 0 && (
              <ul
                className='absolute bg-white border negro text-xl p-2 rounded'
              >
                {suggestedCategories.map((category, index) => (
                  <li
                    key={category.id}
                    className={`cursor-pointer ${index === activeSuggestion ? 'bg-gray-200' : ''
                      }`}
                    onClick={() => handleCategorySelection(category)}
                  >
                    {category.nombre}
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
                  <span className='hover:underline' onClick={() => handleCategorySelection(category)}>{category.nombre}</span>
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