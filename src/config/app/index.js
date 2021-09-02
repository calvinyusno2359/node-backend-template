"use strict";

const { PORT } = process.env;

const appConfig = {
  port: PORT,
  jsonOptions: {
    limit: "5mb",
  },
  urlencodedOptions: {
    extended: true,
    limit: "5mb",
  },
};

module.exports = appConfig;
