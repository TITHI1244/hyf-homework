const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findTheShortestWord(inputArray) {
    let shortestWord = inputArray[0];
    for(let word of inputArray) {
        shortestWord = (word.length < shortestWord.length) ? word : shortestWord;
    }
    return shortestWord;
}
console.log(findTheShortestWord(danishWords)); // returns 'ø'