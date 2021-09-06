"use strict";

module.exports = function (sequelize, Sequelize) {
  return {
    User: require("./User")(sequelize, Sequelize),
  };
};
