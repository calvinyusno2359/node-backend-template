"use strict";

const appConfig = require("./app");
const dbConfig = require("./database/sequelize");

const { NODE_ENV } = process.env;

function useEnvConfig(env) {
  if (env == "dev") return require("./dev");
  if (env == "test") return require("./test");

  return require("./dev");
}

let envConfig = useEnvConfig(NODE_ENV);

const config = {
  ...envConfig,
  app: appConfig,
  db: dbConfig,
};

module.exports = config;
