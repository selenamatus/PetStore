<<<<<<< HEAD
require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const subcategoryRoutes = require('./routes/subcategories');
=======
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c
const app = express();

// bar
app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => console.log(err));

<<<<<<< HEAD
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/subcategories', subcategoryRoutes);
=======
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
>>>>>>> 511827901764120845b226f54f27bb3c3528bb6c

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



