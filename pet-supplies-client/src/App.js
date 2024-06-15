import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Router>
            <div className="App">
                <Header onSearch={handleSearch} /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products searchQuery={searchQuery} />} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;
