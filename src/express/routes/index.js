"use strict";

const router = require("express").Router();
const userRouter = require("./user");

router.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

router.use("/users", userRouter);

module.exports = router;
