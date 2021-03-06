"use strict";

const { User } = require("../../database/sequelize").models;

async function getUser({ id }) {
  const user = await User.findByPk(id);
  return user;
}

module.exports = getUser;
