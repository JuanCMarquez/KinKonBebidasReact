import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

export const app = initializeApp (firebaseConfig);
export const db = getFirestore ();


function FirebaseInitializer({ children }) {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    return () => {
    };
  }, []);
  return children;
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseInitializer>
      <App />
    </FirebaseInitializer>
  </React.StrictMode>
);