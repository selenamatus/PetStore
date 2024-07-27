import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import SubcategoryProducts from './pages/SubcategoryProducts';
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartCount, setCartCount] = useState(0);

    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log('handlesearch query in app.js', query);
    };

    return (
        <Router>
            <div className="App">
                <Header onSearch={handleSearch} />
                <Navbar cartCount={cartCount} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products searchQuery={searchQuery} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category" element={<SubcategoryProducts />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
