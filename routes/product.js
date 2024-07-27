const express = require('express');
const router = express.Router();
const {
    searchProducts,
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductsBySubcategory // Add this import
} = require('../controllers/productController');

// Define routes
router.get('/search', searchProducts);
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/search', searchProducts); // Route for product search
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/subcategory/:subcategory', getProductsBySubcategory); // Define this route

module.exports = router;
