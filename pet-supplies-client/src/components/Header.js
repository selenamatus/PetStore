import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => (
    <header className="header">
        <div className="navbar">
            <Link to="/">Petway</Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
        <SearchBar onSearch={onSearch} />
    </header>
);

export default Header;
