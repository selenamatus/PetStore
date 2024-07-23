import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search-icon.png';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        if (query.trim() === '') {
            navigate('/products');
        } else {
            onSearch(query);
        }
    };

    return (
        <div className="search-bar">
            <button onClick={handleSearchClick}>
                <img src={searchIcon} alt="Search" />
            </button>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
