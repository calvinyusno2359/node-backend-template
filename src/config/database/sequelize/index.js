"use strict";

const {
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  FORCE_SYNC,
} = process.env;

const sequelizeConnectionConfig = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

const dbConfig = {
  connection: sequelizeConnectionConfig,
  syncOptions: {
    force: FORCE_SYNC === "true",
  },
};

module.exports = dbConfig;
