"use strict";

const signUp = require("./signUp");
const logIn = require("./logIn");

const userController = {
  signUp,
  logIn,
};

module.exports = userController;
