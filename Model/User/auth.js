const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		password: {
			type: String,
		},
		
		
	},
	{ timestamps: true }
);

const userModel = mongoose.model("user", user);
module.exports = userModel;