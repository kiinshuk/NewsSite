import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
// import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import NewsBoard from './components/NewsBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar/>
    <NewsBoard/> */}
    <App />
  </React.StrictMode>
);
