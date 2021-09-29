"use strict";

const router = require("express").Router();

const { userController } = require("../../../api");

router.get("/:id", userController.logIn);

router.post("/", userController.signUp);

module.exports = router;
