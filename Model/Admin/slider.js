const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Slider = new Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    discription: {
      type: String,
    },
  },
  { timestamps: true }
);

const adminslider = mongoose.model("slider", Slider);
module.exports = adminslider;
