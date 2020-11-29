"use strict"
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findTheShortestWord(inputArray) {
    let shortestWord = inputArray[0];
    for(let i = 1; i < inputArray.length; i++) {
        shortestWord = (inputArray[i].length < shortestWord.length) ? inputArray[i] : shortestWord;
    }
    return shortestWord;
}
console.log(findTheShortestWord(danishWords)); // returns 'ø'