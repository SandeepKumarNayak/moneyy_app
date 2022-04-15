const mongoose = require("mongoose");
const uuid = require("node-uuid");
const { format } = require("date-fns");

const reviewSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
  },
  _id: {
    type: String,
    default: uuid.v4,
  },
  description: {
    type: String,
    required: true,
  },
  cDate: {
    type: String,
    default: format(new Date(), "yyy/MM/dd/HH/mm//ss"),
  },
  uDate: {
    type: String,
    default: format(new Date(), "yyy/MM/dd/HH/mm/ss"),
  },
});

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
