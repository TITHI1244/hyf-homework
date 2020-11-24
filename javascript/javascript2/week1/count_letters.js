function countDanishLetters(inputString) {
    let countÆ = 0;
    let countØ = 0;
    let countÅ = 0;
    for(let letter of inputString) {
        if(letter.toLowerCase() === 'æ') {
            countÆ++;
        }
        if(letter.toLowerCase() === 'ø') {
            countØ++;
        }
        if(letter.toLowerCase() === 'å') {
            countÅ++;
        }
    }
    const count = {
        total: countÆ + countØ + countÅ,
        æ: countÆ,
        ø: countØ,
        å: countÅ 
    };
    if(countÆ === 0) {
        delete count.æ;
    } if(countØ === 0) {
        delete count.ø;
    } if(countÅ === 0) {
        delete count.å;
    }
    return count;
}

const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2));  // returns {total: 4, æ: 1, ø: 2, å: 1}