"use strict";

const dotenv = require("dotenv").config();

const app = require("./express");
const db = require("./database/sequelize");
const config = require("./config");

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(config);
  db.init();
  db.synch();

  console.log(`Listening to port: ${PORT} (${NODE_ENV})`);
});
