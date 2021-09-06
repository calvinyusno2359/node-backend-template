"use strict";

const sequelize = require("./connection");

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Successfully established connection to MySQL.");
  } catch (err) {
    console.log("Error. Unable to Connect to MySQL:", err);
  }
}

module.exports = {
  init,
  sequelize,
};
