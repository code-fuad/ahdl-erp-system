const express = require("express");
const route = express.Router();

// sample route
route.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = route;
