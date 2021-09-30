"use strict";

import { Application } from "express";

import initApp from "./express";

function init(app: Application): void {
  initApp(app);
}

export default init;
