require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { StocksModel } = require("./database/StocksModel");
const { TradesModel } = require("./database/TradesModel");
const { TransactionsModel } = require("./database/TransactionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

app.get("/api/stocks", async (req, res) => {
  let stocksData = await StocksModel.find({});
  res.json(stocksData);
});

app.get("/api/trades", async (req, res) => {
  let tradesData = await TradesModel.find({});
  res.json(tradesData);
});

app.post("/api/transactions", async (req, res) => {
  let newTransaction = new TransactionsModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newTransaction.save();
  res.send("Transaction saved!");
});

app.listen(PORT, () => {
  console.log(`Portfolio Tracker running on port ${PORT}`);
  mongoose.connect(uri);
  console.log("Database connected");
});