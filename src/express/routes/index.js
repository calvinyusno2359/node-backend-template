"use strict";

const router = require("express").Router();
const userController = require("./user");

router.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

router.get("/users/:id", userController.logIn);
router.post("/users", userController.signUp);

module.exports = router;
