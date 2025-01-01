// Imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./Config/config.env" });

const Acount_Creation=require("./Students/Acount_Creation.js")

// Environment Variables
const port = process.env.PORT;
const dbHost = process.env.DB_HOST;

const app = express();
app.use(express.json());

// Mongoose Connection
mongoose
  .connect(dbHost)
  .then((result) => {
    console.log("[ # ] Connected to Mongodb...");
  })
  .catch((err) => {
    console.error(err);
  });
  const Students = require('./modeal/Students_Model.js');

// Request Logs Middleware
const Log_Writer = require("./Controllers/Log_Writer");
app.use(Log_Writer);


app.use("/Students/AccountCreation",Acount_Creation)

// Basic Routes
app.get("/", (req, res) => {
  res.send("Nothing Hear");
});
app.post("/", (req, res) => {
  res.send("Nothing Hear");
});

// Start Server
app.listen(port, () => {
  console.log(`[ # ] Server started in port : ${port}....`);
});
