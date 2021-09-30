"use strict";

import * as express from "express";

import init from "./loader";

function main() {
  const app = express();
  init(app);

  app.listen(8080, () => console.log("listening..."));
}

main();
