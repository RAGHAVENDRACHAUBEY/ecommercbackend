const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categories = new Schema(
	{
		catname: {
			type: String,
		},
		
	},
	{ timestamps: true }
);

const adminCategories = mongoose.model("categories", categories);
module.exports = adminCategories;
