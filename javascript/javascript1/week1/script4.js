const firstWords = ["Awesome", "Creative", "Extra-ordinary", "Easy", "Flexible", "All-rounder", "Marvelous", "Integrated", "Embodied", "Corporal"];
const secondWords = [" Starter", " Launch", " Attempt", " Corporation", " Organization", " Start-up", " Bootup", " Company", " Firm", " Business"];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber1] +  secondWords[randomNumber2];
console.log("The startup: " + "'" + startupName + "'" + "contains " + startupName.length + " characters.");