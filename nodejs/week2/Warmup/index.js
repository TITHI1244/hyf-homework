const express = require("express");
const app = express();
// const numbersRouter = require("./numbers_router");

app.get("/", (req, res) => res.send("nodejs week2 homework"));

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add/", (req, res) => {
    console.log(req.query);
    const firstNumber = parseInt(req.query.first) > 0 ? parseInt(req.query.first) : 0;
    const secondNumber = parseInt(req.query.second) > 0 ? parseInt(req.query.second) : 0;
    res.send(`Numbers given: ${firstNumber}, ${secondNumber} and result of addition: ${firstNumber + secondNumber}`);
});

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.get("/numbers/multiply/:firstNumber/:secondNumber", (req, res) => {
    console.log(req.params);
    const firstNumber = parseInt(req.params.firstNumber) > 0 ? parseInt(req.params.firstNumber) : 0;
    const secondNumber = parseInt(req.params.secondNumber) > 0 ? parseInt(req.params.secondNumber) : 0;
    res.send(`Numbers given: ${firstNumber}, ${secondNumber} and result of multiplication: ${firstNumber * secondNumber}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));