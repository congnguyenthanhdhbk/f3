const Actions = require("./actions");

const IncreaseQuantityAction = {
	rest: Actions.Rest.INCREASE_QUANTITY,
	params: Actions.ParamValidator.increaseQuantity,
	handler: (ctx) => Actions.Handler.increaseQuantity(ctx)
};

module.exports = {
	IncreaseQuantityAction
};
