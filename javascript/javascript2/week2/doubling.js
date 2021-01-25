"use strict"
// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers[i] = numbers[i] * 2;
//   }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

// Rewrite the above program using map and filter don't forget to use arrow functions.

let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter((number) => number % 2 !== 0) // filter the numbers which are non divisible by 2
                        .map((number) => number * 2); // map through the filtered array and double te numbers

console.log("The doubled numbers are", newNumbers); // [2, 6]