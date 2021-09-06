"use strict";

const Sequelize = require("sequelize");

const sequelize = require("./connection");
const models = require("./models")(sequelize, Sequelize);

const { syncOptions } = require("../../config").db;

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Successfully established connection to MySQL.");
  } catch (err) {
    console.log("Error. Unable to Connect to MySQL:", err);
  }
}

async function synch() {
  try {
    await sequelize.sync(syncOptions);
    console.log("Successfully established connection to MySQL.");
  } catch (err) {
    console.log("Error. Unable to Sync to MySQL:", err);
  }
}

// TODO: attach this handler to process.on("exit") or process.on("SIGTERM")
async function shutdown() {
  console.log("Closing connection to MySQL.");
  await sequelize.close();
}

module.exports = {
  init,
  synch,
  sequelize,
  ...models,
};
