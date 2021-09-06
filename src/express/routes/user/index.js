"use strict";

const { userService } = require("../../../services");

async function signUp(req, res, next) {
  const user = await userService.createUser(req.body);
  return res.json({ user });
}

async function logIn(req, res, next) {
  const user = await userService.getUser(req.body);
  return res.json({ user });
}

const userController = {
  signUp,
  logIn,
};

module.exports = userController;
