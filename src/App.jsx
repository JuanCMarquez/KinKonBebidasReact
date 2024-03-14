import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import ItemList from './components/ItemListContainer'
/*import ItemDetailContainer from './components/ItemDetailContainer'
import ItemDetail from './components/ItemDetail'
import ItemCount from './components/ItemCount'*/
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


