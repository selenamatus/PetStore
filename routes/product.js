const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct, searchProducts } = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search', searchProducts);

module.exports = router;
