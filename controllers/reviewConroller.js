const Review = require("../models/reviewModel");

exports.createReview = async (req, res, next) => {
  try {
    const data = await Review.create({
      product_id: req.body.product_id,
      description: req.body.description,
      user_id: req.body.user_id,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllReviews = async (req, res, next) => {
  try {
    const data = await Review.find();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getReviewById = async (req, res, next) => {
  try {
    const data = await Review.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const data = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};
