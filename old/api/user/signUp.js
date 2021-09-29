"use strict";

const { userService } = require("../../services");

async function signUp(req, res, next) {
  const user = await userService.createUser(req.body);
  return res.json({ user });
}

module.exports = signUp;
