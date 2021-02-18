const express = require("express");
const router = express.Router();

router.get("/", async(request, response) => {
    console.log(request.query);
    if(request.query.firstParam === undefined || request.query.firstParam === '' || request.query.secondParam === undefined || request.query.secondParam === '') {
        response.status(400).end();
    } else {
        let result = parseInt(request.query.firstParam);
        (Array.isArray(request.query.secondParam)) ? 
            request.query.secondParam.map(number => result += parseInt(number)) :
            result += parseInt(request.query.secondParam);
        response.json(result);
    }   
});

router.post("/", async (request, response) => {
    try {
      console.log(request.query.firstParam);
      console.log(request.query.secondParam);
      if(request.query.firstParam === undefined || request.query.firstParam === '' || request.query.secondParam === undefined || request.query.secondParam === '') {
        response.status(400).end();
    } else {
        let result = parseInt(request.query.firstParam);
        (Array.isArray(request.query.secondParam)) ? 
            request.query.secondParam.map(number => result += parseInt(number)) :
            result += parseInt(request.query.secondParam);
        response.json(result);
    } 
    } catch (error) {
      throw error;
    }
});

module.exports = router;