"use-strict";

const dotenv = require("dotenv").config();

const app = require("./express");

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT} (${NODE_ENV})`);
});
