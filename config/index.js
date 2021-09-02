"use-strict";

const appConfig = require("./app");

const { NODE_ENV } = process.env;

let envConfig =
  NODE_ENV == "dev"
    ? require("./dev")
    : NODE_ENV == "test"
    ? require("./test")
    : require("./dev");

const config = {
  ...envConfig,
  app: appConfig,
};

module.exports = config;
