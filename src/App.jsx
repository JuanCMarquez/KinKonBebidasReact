import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './index.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

/*<Routes>
                            <Route path="/" element={<ItemListContainer greeting={"Hola Xboxer!"} />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/ItemListPage" element={<ItemListPage greeting={"Productos!"} />} />
                        </Routes>*/

/*const App = () => {
  return (
    <Navbar />
  );
};

export default App;*/


