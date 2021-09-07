"use strict";

const { userService } = require("../../services");

async function logIn(req, res, next) {
  const user = await userService.getUser(req.body);
  return res.json({ user });
}

module.exports = logIn;
