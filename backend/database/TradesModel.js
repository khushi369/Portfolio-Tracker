const { model } = require("mongoose");
const PositionsSchema = require("../schema/PositionsSchema");

const TradesModel = new model("trade", PositionsSchema);

module.exports = { TradesModel };