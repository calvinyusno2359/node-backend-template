"use strict";

const appConfig = require("./app");

const { NODE_ENV } = process.env;

function useConfig(env) {
  if (env == "dev") return require("./dev");
  if (env == "test") return require("./test");

  return require("./dev");
}

let envConfig = useConfig(NODE_ENV);

const config = {
  ...envConfig,
  app: appConfig,
};

module.exports = config;
