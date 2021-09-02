"use-strict";

const express = require("express");
const cors = require("cors");

const app = new express();

const jsonOptions = {
  limit: "5mb",
};

const urlencodedOptions = {
  extended: true,
  limit: "5mb",
};

app.use(express.json(jsonOptions));
app.use(express.urlencoded(urlencodedOptions));
app.use(cors());

module.exports = app;
