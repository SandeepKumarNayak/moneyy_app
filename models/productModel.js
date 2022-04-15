const mongoose = require("mongoose");
const uuid = require("node-uuid");
const { format } = require("date-fns");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must have a Name"],
  },
  price: {
    type: Number,
    required: [true, "Product must have Price"],
  },
  _id: {
    type: String,
    default: uuid.v4,
  },
  cDate: {
    type: String,
    default: format(new Date(), "yyyy/MM/dd/HH/mm/ss"),
  },
  uDate: {
    type: String,
    default: format(new Date(), "yyyy/MM/dd/HH/mm/ss"),
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
