"use strict"
function countDanishLetters(inputString) {
    let countÆ = 0;
    let countØ = 0;
    let countÅ = 0;
    let count = {
        total: countÆ + countØ + countÅ 
    };
    for(let letter of inputString) {
        if(letter.toLowerCase() === 'æ') {
            countÆ++;
            count.æ = countÆ;
        } else if(letter.toLowerCase() === 'ø') {
            countØ++;
            count.ø = countØ;
        } else if(letter.toLowerCase() === 'å') {
            countÅ++;
            count.å = countÅ;
        }
    }
    return count;
}

const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2));  // returns {total: 4, æ: 1, ø: 2, å: 1}