const express = require("express");
const app = express();

// middlewares to parse json
app.use(express.json());

// register routes
app.use("/api", require("./routes/index"));

module.exports = app;
