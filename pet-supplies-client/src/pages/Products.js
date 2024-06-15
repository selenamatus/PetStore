import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

function Products({ searchQuery }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="products">
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default Products;
