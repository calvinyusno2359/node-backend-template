"use strict";

import { json, urlencoded, Application, Request, Response } from "express";
import * as cors from "cors";

function initApp(app: Application): void {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
}

export default initApp;
