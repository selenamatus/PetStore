const Product = require('../models/product');

exports.searchProducts = async (req, res) => {
  const { minPrice, maxPrice, categories, brands } = req.query;
  const filter = {};

  if (minPrice) {
    filter.price = { ...filter.price, $gte: Number(minPrice) };
  }
  if (maxPrice) {
    filter.price = { ...filter.price, $lte: Number(maxPrice) };
  }
  if (categories) {
    filter.category = { $in: categories.split(',') };
  }
  if (brands) {
    filter.brand = { $in: brands.split(',') };
  }

  try {
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
