const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getCart);
router.post('/', auth, addToCart);
router.delete('/:id', auth, removeFromCart);

module.exports = router;
