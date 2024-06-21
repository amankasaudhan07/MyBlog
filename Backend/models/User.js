const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
		
	},
	category: {
		type: String,
		 required: true,
	},
	date: {
		type:Date,
		required: true,
		// default:Date.now(),
		
	},
	content: {
		type: String,
		required: true,
	},
	tag: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
