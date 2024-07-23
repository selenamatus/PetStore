import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [currentPriceRange, setCurrentPriceRange] = useState([0, 100]); // state עבור ערכי הסרגל הנוכחיים
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 100,
        selectedCategories: [],
        selectedBrands: []
    });

    const fetchProducts = async (appliedFilters) => {
        try {
            const response = await axios.get('http://localhost:5000/api/products', {
                params: {
                    minPrice: appliedFilters.minPrice,
                    maxPrice: appliedFilters.maxPrice,
                    categories: appliedFilters.selectedCategories.join(','),
                    brands: appliedFilters.selectedBrands.join(',')
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        const fetchInitialProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);

                // חישוב המחיר הנמוך ביותר והגבוה ביותר מבין המוצרים
                const prices = response.data.map(product => product.price);
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);
                setPriceRange([minPrice, maxPrice]);
                setCurrentPriceRange([minPrice, maxPrice]);
                setFilters({ ...filters, minPrice, maxPrice });

                // טען את רשימת הקטגוריות
                const uniqueCategories = [...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);

                // טען את רשימת היצרנים
                const uniqueBrands = [...new Set(response.data.map(product => product.brand))];
                setBrands(uniqueBrands);
            } catch (error) {
                console.error('Error fetching initial products:', error);
            }
        };

        fetchInitialProducts();
    }, []);

    const handleSliderChange = (value) => {
        setCurrentPriceRange(value); // עדכון ערכי הסרגל הנוכחיים בזמן אמת
    };

    const handleSliderAfterChange = (value) => {
        setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
        fetchProducts({ ...filters, minPrice: value[0], maxPrice: value[1] });
    };

    const handleCategoryChange = (category) => {
        const updatedCategories = filters.selectedCategories.includes(category)
            ? filters.selectedCategories.filter(c => c !== category)
            : [...filters.selectedCategories, category];
        setFilters({ ...filters, selectedCategories: updatedCategories });
    };

    const handleBrandChange = (brand) => {
        const updatedBrands = filters.selectedBrands.includes(brand)
            ? filters.selectedBrands.filter(b => b !== brand)
            : [...filters.selectedBrands, brand];
        setFilters({ ...filters, selectedBrands: updatedBrands });
    };

    const handleSearchClick = () => {
        fetchProducts(filters);
    };

    return (
        <div className="products-page">
            <div className="products-list">
                <ProductList products={products} />
            </div>
            <div className="filters">
                <div className="price-range">
                    <Slider
                        range
                        min={priceRange[0]}
                        max={priceRange[1]}
                        defaultValue={priceRange}
                        onChange={handleSliderChange}
                        onAfterChange={handleSliderAfterChange}
                    />
                    <div className="price-labels">
                        <span>{currentPriceRange[0]}</span>
                        <span>{currentPriceRange[1]}</span>
                    </div>
                </div>
                <div className="categories">
                    <h4>Categories</h4>
                    {categories.map(category => (
                        <label key={category}>
                            <input
                                type="checkbox"
                                value={category}
                                checked={filters.selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                        </label>
                    ))}
                </div>
                <div className="brands">
                    <h4>Brands</h4>
                    {brands.map(brand => (
                        <label key={brand}>
                            <input
                                type="checkbox"
                                value={brand}
                                checked={filters.selectedBrands.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                            />
                            {brand}
                        </label>
                    ))}
                </div>
                <button onClick={handleSearchClick}>Search</button>
            </div>
        </div>
    );
};

export default Products;
