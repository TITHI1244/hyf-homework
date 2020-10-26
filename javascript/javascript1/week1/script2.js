const dogYearOfBirth = 2015; 
let dogYearFuture = 2025;
let dogYear = dogYearFuture - dogYearOfBirth;
let dogOrHumanString = " dog ";

let shouldShowResultInDogYears = true;

if(!shouldShowResultInDogYears) {
    dogYear = dogYear * 7;
    dogOrHumanString = " human ";
}

console.log("Your dog will be " + dogYear + dogOrHumanString +  "years old in " + dogYearFuture);