"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loader_1 = require("./loader");
function main() {
    const app = express();
    (0, loader_1.default)(app);
    app.listen(8080, () => console.log("listening..."));
}
main();
