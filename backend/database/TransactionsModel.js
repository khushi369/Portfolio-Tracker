const { model } = require("mongoose");
const OrdersSchema = require("../schema/OrdersSchema");

const TransactionsModel = new model("transaction", OrdersSchema);

module.exports = { TransactionsModel };