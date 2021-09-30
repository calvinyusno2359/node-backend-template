"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors = require("cors");
function initApp(app) {
    app.get("/", (req, res) => {
        res.send("Hello World");
    });
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use(cors());
}
exports.default = initApp;
