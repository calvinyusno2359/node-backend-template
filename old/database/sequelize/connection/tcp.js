"use strict";

const Sequelize = require("sequelize");

const { host, port, dialect, username, password, database } =
  require("../../../config").db.connection;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
});

module.exports = sequelize;
