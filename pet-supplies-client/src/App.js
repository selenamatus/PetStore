import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SearchBar from './components/SearchBar';  
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Router>
            <div className="App">
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
                    <SearchBar onSearch={handleSearch} />  
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products searchQuery={searchQuery} />} />
                </Routes>
                <footer className="footer">
                    &copy; 2024 Pet Supplies Store
                </footer>
            </div>
        </Router>
    );
}

export default App;
