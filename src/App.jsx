import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './index.css';
import './App.css';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import CheckoutForm from './components/Checkout';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm cartItems={Cart} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

