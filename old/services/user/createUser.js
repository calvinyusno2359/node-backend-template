"use strict";

const { User } = require("../../database/sequelize").models;

async function createUser({ id, name }) {
  const user = await User.create({
    id: id,
    name: name,
  });
  return user;
}

module.exports = createUser;
