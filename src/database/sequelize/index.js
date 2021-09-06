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

// TODO: attach this handler to process.on("exit") or process.on("SIGTERM")
async function shutdown() {
  console.log("Closing connection to MySQL.");
  await sequelize.close();
}

module.exports = {
  init,
  sequelize,
};
