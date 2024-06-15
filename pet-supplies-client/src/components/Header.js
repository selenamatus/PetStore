import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="navbar">
        <Link to="/">Petway</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <SearchBar onSearch={onSearch} /> {/* Add this line */}
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
