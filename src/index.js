"use strict";

const dotenv = require("dotenv").config();

const app = require("./express");
const config = require("./config");

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(config);
  console.log(`Listening to port: ${PORT} (${NODE_ENV})`);
});