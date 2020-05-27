"use strict";

const OrmMixin = require("../../mixins/orm.mixin.js");
const { addedCustomer } = require("../customer-service");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "customers",
	version: 1,

	/**
	 * Mixins
	 */
	mixins: [OrmMixin( "customers")],

	/**
	 * Settings
	 */
	settings: {
		idField: "customerId",
		fields: {
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
		},

		entityValidator: {
			fullName: "string|max:45",
			lastName: "string|max:45",
			phone: "string|max:11",
			email: "string|max:45"
		}

	},

	/**
	 * Action Hooks
	 */
	hooks: {
		before: {
		}
	},

	/**
	 * Actions
	 */
	actions: {
		addedCustomer: addedCustomer,
	},

	/**
	 * Methods
	 */
	methods: {
		/**
		 * Loading sample data to the collection.
		 * It is called in the DB.mixin after the database
		 * connection establishing & the collection is empty.
		 */
		async seedDB() {
			await this.adapter.insertMany([
				{ fullName: "Nguyen Thanh Cong", lastName: "Nguyen", phone: "0988656949", email: "cong1989.nt@gmail.com" },
				{ fullName: "Nguyen Thanh Phong", lastName: "Nguyen", phone: "0988656959", email: "cong1993.nt@gmail.com" },
				{ fullName: "Le Chi Thanh", lastName: "Le", phone: "0988656969", email: "cong1990.nt@gmail.com" },
				{ fullName: "Vu Nguyen Bac", lastName: "Vu", phone: "0988656979", email: "cong1991.nt@gmail.com" },
				{ fullName: "Thai Van Anh", lastName: "Thai", phone: "0988656989", email: "cong1992.nt@gmail.com" },
			]);
		}
	},

	/**
	 * Fired after database connection establishing.
	 */
	async afterConnected() {
		// await this.adapter.collection.createIndex({ name: 1 });
	}
};
