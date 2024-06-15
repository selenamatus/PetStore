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


exports.createProduct = async (req, res) => {
  // create product logic- yet implement
};

exports.getProducts = async (req, res) => {
  try {
      const products = await Product.find();
      res.json(products);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};
exports.getProductById = async (req, res) => {
  // product by ID logic- still need to implement
};

exports.updateProduct = async (req, res) => {
  // update product logic- need to implement
};

exports.deleteProduct = async (req, res) => {
  //  delete product logic - need to implement
};
