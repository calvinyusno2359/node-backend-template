"use strict";

const express = require("express");
const cors = require("cors");

const { jsonOptions, urlencodedOptions } = require("../../config").app;

const app = new express();

app.use(express.json(jsonOptions));
app.use(express.urlencoded(urlencodedOptions));
app.use(cors());

module.exports = app;
