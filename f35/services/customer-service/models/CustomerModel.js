const { BaseModel } = require("../../../models");

class CustomerModel extends BaseModel {
	constructor(collection, schema) {
		super(collection, schema);
	}
}

module.exports = CustomerModel;
