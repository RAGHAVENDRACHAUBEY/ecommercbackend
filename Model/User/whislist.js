const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const whishListSchema = new mongoose.Schema(
  {
    customerId: {
      type: ObjectId,
      ref: "customers",
    },
    productId: {
      type: ObjectId,
      ref: "product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    userType: { type: String },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const whishlishModel = mongoose.model("WhishListA", whishListSchema);
module.exports = whishlishModel;
