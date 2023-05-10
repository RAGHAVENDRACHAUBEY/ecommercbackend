const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminuser = new Schema(
    {
		email: {
			type: String,
		},
		password: {
			type: String,
		},
	},
	{ timestamps: true }
);

const adminUsers = mongoose.model("adminuser", adminuser);
module.exports = adminUsers;
