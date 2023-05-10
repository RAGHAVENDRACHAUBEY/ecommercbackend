const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const orderadd = new Schema(
  {
    userId: {
      type: ObjectId,
    },
    name: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    email: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },
  },
  { timestamps: true }
);

const orderaddress = mongoose.model("orderadd", orderadd);
module.exports = orderaddress;
