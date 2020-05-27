const DbService = require("moleculer-db");
const MongoAdapter = require("moleculer-db-adapter-mongo");

module.exports = (collection) => {
	return {
		mixins: [DbService],
		adapter: new MongoAdapter("mongodb://localhost:27017/f3", { useNewUrlParser: true }),
		collection,
		methods: {
		}
	};
}
