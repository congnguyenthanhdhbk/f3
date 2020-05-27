module.exports = {
	createCustomer: async (ctx) => {
		const self = ctx.service;

		const customerDto = ctx.params;

		const customer = {
			...customerDto,
			isDeleted: true,
			status: "C",
			createdDate: new Date(),
			updatedDate: new Date(),
			createdBy: "SYSTEM",
			updatedBy: "SYSTEM"
		};

		return self.adapter.insert(customer)
			.then((addedCustomers) => self.transformDocuments(ctx, {}, addedCustomers))
			.then((json) => self.entityChanged("created", json, ctx).then(() => {
				// delete json.isDeleted;
				// delete json.status;
				// delete json.createdDate;
				// delete json.updatedDate;
				// delete json.createdBy;
				// delete json.updatedBy;

				return {
					code: 200,
					message: "succeed",
					data: json
				};
			}))
			.catch((err) => err);
	}
}
