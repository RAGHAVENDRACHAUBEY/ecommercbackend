const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema(
  {
    productname: {
      type: String,
    },
    productprice: {
      type: Number,
    },
    productcategory: {
      type: String,
    },
    productdis: {
      type: String,
    },
    productimage: {
      type: String,
    },
    productsubimage1: {
      type: String,
    },
    productsubimage2: {
      type: String,
    },
    productsubimage3: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", product)