// controllers/productController.js
const Product = require('../models/product');

<<<<<<< HEAD
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
=======
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.getProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted' });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

exports.searchProducts = async (req, res) => {
  const { minPrice, maxPrice, categories, brands, searchQuery } = req.query;
  const filter = {};

  // Handle price range
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) {
      filter.price.$gte = Number(minPrice);
    }
    if (maxPrice) {
      filter.price.$lte = Number(maxPrice);
    }
>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c
  }

<<<<<<< HEAD
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
=======
  // Handle categories
  if (categories) {
    filter.category = { $in: categories.split(',') };
  }

  // Handle brands
  if (brands) {
    filter.brand = { $in: brands.split(',') };
  }

  // Handle search query
  if (searchQuery) {
    filter.name = { $regex: new RegExp(searchQuery, 'i') }; // Case-insensitive search
  }

  try {
    const products = await Product.find(filter);
>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c
