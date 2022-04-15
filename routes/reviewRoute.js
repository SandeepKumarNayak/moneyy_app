const express = require("express");
const reviewController = require("../controllers/reviewConroller");
const router = express.Router();

router.post("/createReview", reviewController.createReview);
router.get("/getAllReview", reviewController.getAllReviews);
router.delete("/deleteReview/:id", reviewController.deleteReview);
router.get("/getReviewById/:id", reviewController.getReviewById);

module.exports = router;
