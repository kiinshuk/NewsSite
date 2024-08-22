import React, { useState } from 'react';
import "../App.css";

const Navbar = ({ onCategoryChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="brand" aria-label="Home" >
          Newsite
        </a>
        <div 
          className={`menu-icon ${menuOpen ? 'open' : ''}`} 
          onClick={handleMenuClick}
        ></div>
        <div className={`categories ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => onCategoryChange('business')}>Business</button>
          <button onClick={() => onCategoryChange('entertainment')}>Entertainment</button>
          <button onClick={() => onCategoryChange('general')}>General</button>
          <button onClick={() => onCategoryChange('health')}>Health</button>
          <button onClick={() => onCategoryChange('science')}>Science</button>
          <button onClick={() => onCategoryChange('sports')}>Sports</button>
          <button onClick={() => onCategoryChange('technology')}>Technology</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
