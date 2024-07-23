const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct, searchProducts } = require('../controllers/productController');

router.post('/', createProduct); // ודא שפונקציה זו מוגדרת ומיובאת כראוי
router.get('/', getProducts);
router.get('/search', searchProducts); // הנתיב לחיפוש מוצרים
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
