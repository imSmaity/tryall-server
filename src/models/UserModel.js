const mongoose = require('mongoose');

const userSchamaStructure = {
	_id: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	created: {
		type: String,
		default: new Date().toISOString(),
	},
	password: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
	bio: {
		type: String,
		required: false,
	},
	location: {
		type: String,
		required: false,
	},
	following: {
		type: Array,
		required: false,
	},
	followers: {
		type: Array,
		required: false,
	},
	website: {
		type: String,
		required: false,
	},
	dob: {
		type: String,
		required: false,
	},
	posts: {
		type: Array,
		required: false,
	},
};

const userSchema = new mongoose.Schema(userSchamaStructure);

const User = new mongoose.model('user', userSchema);
module.exports = User;
