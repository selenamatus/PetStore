const Product = require('../models/product');

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
  }

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
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};