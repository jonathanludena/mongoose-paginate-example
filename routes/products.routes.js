const { Router } = require("express");

const Product = require("../models/products");

const router = Router();

router.get("/products", async (req, res) => {
  // localhost:3000/products/?limit=3&page=2
  const limit = parseInt(req.query.limit, 10) || 7;
  const page = parseInt(req.query.page, 10) || 1;
  const products = await Product.paginate({}, { limit, page });
  res.json(products);
});

router.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const productSaved = await newProduct.save();

  res.json(productSaved);
});

module.exports = router;
