const DbService = require("moleculer-db");

module.exports = (collection) => {
	const schema = {
		mixins: [DbService],
		method: {}
	};

	const MongoAdapter = require("moleculer-db-adapter-mongo");
	schema.adapter = new MongoAdapter("mongodb://localhost:27017/f3", { useNewUrlParser: true });
	schema.collection = collection;
	return schema;
}
