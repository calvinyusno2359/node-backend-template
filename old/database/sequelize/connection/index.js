"use strict";

const config = require("../../../config");

const { NODE_ENV } = config.env;

function useConnection(env) {
  if (env === "dev") return require("./tcp");
  if (env === "test") return require("./unix");

  return require("./tcp");
}

let connection = useConnection(NODE_ENV);

module.exports = connection;
