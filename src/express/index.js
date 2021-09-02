"use strict";

const app = require("./app");
const router = require("./routes");

app.use("/api", router);

module.exports = app;
