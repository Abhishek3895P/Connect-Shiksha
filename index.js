// Imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./Config/config.env" });
const path = require('path');
const Acount_Creation=require("./Students/Acount_Creation.js")
const add_Bathes=require("./Admin/Owner/add_Batches.js")

// Environment Variables
const port = process.env.PORT;
const dbHost = process.env.DB_HOST;

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

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
app.use("/admin/owner",add_Bathes)

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
