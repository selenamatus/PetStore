import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
<<<<<<< HEAD
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Login from './components/Login';
import Register from './components/Register'; 
import Navbar from './components/Navbar'; 
import SubcategoryProducts from './pages/SubcategoryProducts';
=======
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c
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
<<<<<<< HEAD
                <Header onSearch={handleSearch} /> 
                <Navbar cartCount={cartCount} />
=======
                <Header onSearch={handleSearch} />
>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products searchQuery={searchQuery} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category/:category" element={<SubcategoryProducts />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
