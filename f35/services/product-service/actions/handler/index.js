module.exports = {
	increaseQuantity: async (ctx) => {
		const self = ctx.service;
		const doc = await self.adapter.updateById(ctx.params.id, { $inc: { quantity: ctx.params.value } });
		const json = await self.transformDocuments(ctx, ctx.params, doc);
		await self.entityChanged("updated", json, ctx);

		return json;
	}
};
