const mongoose = require("mongoose");
const paginateV2 = require("mongoose-paginate-v2");

const CustomerModel = require("./CustomerModel");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
	fullName: {
		type: String,
		max: 45
	},
	lastName: {
		type: String,
		max: 45
	},
	phone: {
		type: String,
		max: 11
	},
	email: {
		type: String,
		max: 45
	},
	isDeleted: {
		type: Boolean,
		default: true
	},
	status: {
		type: String,
		enum: [ "D", "U", "C"],
		default: "C"
	},
	createdDate: {
		type: Date,
		default: Date.now()
	},
	updatedDate: {
		type: String,
		default: Date.now()
	},
	createdBy: {
		type: String,
		max: 45,
		default: "SYSTEM"
	},
	updatedBy: {
		type: String,
		max: 45,
		default: "SYSTEM"
	}
});

customerSchema.plugin(paginateV2);

const Customer = new CustomerModel("Customers", customerSchema);

module.exports = Customer;
