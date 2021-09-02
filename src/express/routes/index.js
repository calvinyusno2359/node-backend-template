"use strict";

const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

module.exports = router;
