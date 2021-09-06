"use strict";

const Sequelize = require("sequelize");

const { dialect, host, port, username, password, database } =
  require("../../../config").db.connection;

const sequelize = new Sequelize({
  dialect: dialect,
  host: `/cloudsql/${instanceConnectionName}`,
  port: port,
  username: username,
  password: password,
  database: database,
});

module.exports = sequelize;
