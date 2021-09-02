"use-strict";

const dotenv = require("dotenv").config();

const app = require("./express-app");
const router = require("./express-routes");

const { PORT, NODE_ENV } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT} (${NODE_ENV})`);
});
