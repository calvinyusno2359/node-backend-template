"use strict";

const Sequelize = require("sequelize");

const { dialect, host, port, username, password, database } =
  require("../../../config").sequelize;

const sequelize = new Sequelize({
  dialect: dialect,
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
});

module.exports = sequelize;
