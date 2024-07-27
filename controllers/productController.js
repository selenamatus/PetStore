// controllers/productController.js
const Product = require('../models/product');

// Search products by name
exports.searchProducts = async (req, res) => {
  try {
    const query = req.query.q || '';
    const products = await Product.find({
      name: { $regex: new RegExp(query, 'i') }
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create product
exports.createProduct = async (req, res) => {
  // create product logic - yet to implement
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  // product by ID logic - still need to implement
};

// Update product
exports.updateProduct = async (req, res) => {
  // update product logic - need to implement
};

// Delete product
exports.deleteProduct = async (req, res) => {
  // delete product logic - need to implement
};

// Get products by subcategory
exports.getProductsBySubcategory = async (req, res) => {
  try {
    const subcategory = req.params.subcategory;
    const products = await Product.find({ subcategory: subcategory });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
