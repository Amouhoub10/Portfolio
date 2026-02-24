import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Make sure this is imported
import App from './App';
import './App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>  {/* This handles client-side routing */}
      <App />
    </HashRouter>
  </React.StrictMode>,
);