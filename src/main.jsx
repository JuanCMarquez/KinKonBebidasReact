import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Cambio aquí
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvp5-Bv1EEPXtRw5X6WUy2N6vjqrndeWQ",
  authDomain: "kinkon-bebidas.firebaseapp.com",
  projectId: "kinkon-bebidas",
  storageBucket: "kinkon-bebidas.appspot.com",
  messagingSenderId: "636698781803",
  appId: "1:636698781803:web:996ca806ed2578a9bc292e"
};

const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);