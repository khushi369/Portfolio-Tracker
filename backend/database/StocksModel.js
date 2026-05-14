const { model } = require("mongoose");
const HoldingsSchema = require("../schema/HoldingsSchema");
const StocksModel = new model("stock", HoldingsSchema);

module.exports = { StocksModel };