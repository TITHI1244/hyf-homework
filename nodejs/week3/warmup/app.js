const express = require("express");
const app = express();

const addRouter = require("./api/add-router");
const subtractRouter = require("./api/subtract-router");
const multiplyRouter = require("./api/multiply-router");
const divideRouter = require("./api/divide-router");

app.use("/calculator/add", addRouter);
app.use("/calculator/subtract", subtractRouter);
app.use("/calculator/multiply", multiplyRouter);
app.use("/calculator/divide", divideRouter);

app.get("/", (req, res) => res.send("nodejs week3 homework"));

module.exports = app;