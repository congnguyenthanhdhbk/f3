const Customer = require("./models");
const { CustomerActions, CustomerParams, CustomerRest} = require("./actions");

const addedCustomer = {
	rest: CustomerRest.ADD_CUSTORMER,
	params: CustomerParams.customerDto,
	handler: (ctx) => CustomerActions.createCustomer(ctx)
}

module.exports = {
	Customer,
	addedCustomer
};
