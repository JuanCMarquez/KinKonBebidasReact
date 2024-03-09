import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './navbar'
import ItemList from './Itemlist'
import './index.css'
import './App.css'

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<ItemList />} />

      </Routes>

    </Router>
  );
};

export default App;

/*const App = () => {
  return (
    <Navbar />
  );
};

export default App;*/


