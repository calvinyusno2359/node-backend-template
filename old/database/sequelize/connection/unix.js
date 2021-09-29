"use strict";

const Sequelize = require("sequelize");

const { host, dialect, username, password, database } =
  require("../../../config").db.connection;

// cloud sql uses UNIX connection through proxy instead of the regular TCP
const sequelize = new Sequelize(database, username, password, {
  host: `/cloudsql/${host}`, // instance_connection_string
  dialect: dialect,
  dialectOptions: {
    socketPath: `/cloudsql/${host}`, // instance_connection_string
  },
});

module.exports = sequelize;
