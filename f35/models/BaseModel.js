const mongoose = require("mongoose");
const _  =  require("lodash");

class BaseModel extends mongoose.model {
	constructor(collection, schema) {
		super(collection, schema);

		this.findById$ = async (id) => await this.findById(id);
		this.insert$ = async (entity) => await this.create(entity);
		this.findAll$ = async (options) => await this.paginate({}, options);
		this.delete$ = async (id) => {
			const entity = await this.findById(id);
			if (_.isEmpty(entity) || !entity) {
				throw new Error(`the ${id} doesn't exist`);
			}
			const detetedEntity = {...entity._doc};
			detetedEntity.createdAt = new Date();
			detetedEntity.updatedAt = new Date();
			detetedEntity.isDeleted = true;

			return this.save(detetedEntity);
		};
	}
}

module.exports = BaseModel;
