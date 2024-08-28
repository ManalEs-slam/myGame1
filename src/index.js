import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer createRoot à partir de react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Utiliser createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();



