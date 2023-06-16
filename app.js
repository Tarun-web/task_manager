const express = require("express");
const app = express();

//handling cors
const cors = require("cors");
app.use(cors());

//initializing json
app.use(express.json());

//defining the routes
const task = require("./routes/taskRoute");
app.use("/api/v1", task);

module.exports = app;
