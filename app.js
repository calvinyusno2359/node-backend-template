"use-strict";

const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = new express();

const PORT = process.env.PORT || 3000;

app.use(
  express.json({
    limit: "5mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
