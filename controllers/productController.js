const Product = require("../models/productModel");

exports.getProduct = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const data = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const data = await Product.create({
      name: req.body.name,
      price: req.body.price,
    });
    res.status(201).json({
      status: "successfully created",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};
