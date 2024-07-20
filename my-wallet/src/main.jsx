// Importing necessary modules from React library
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App.jsx';

// Importing global CSS styles
import './index.css';

// Creating a root element and rendering the App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
