"use strict"

// the array of animals
const animals = [
    "The beautiful butterfly",
    "The crying owl",
    "The vigilant hawk",
    "The white swan",
    "The inconstant chameleon",
    "The active woodpecker",
    "The drowning seahorse",
    "The mocking jay",
    "The flying pelican",
    "The nocturnam moth"
];
const btnElement = document.getElementById("click_to_see");
const btnElement2 = document.getElementById("check_again");
const h3Element = document.getElementById("show_result");
// do not display the button at first
btnElement2.style.display = "none";

// create a function which activates after the button click, and changes the h3 text into the random animal from array
function showTheAnimal() {
    const userName = document.getElementById("user_input").value;
    if(userName === "") {
        h3Element.innerHTML = "Please enter your name first!!!";
    } else {
        const randomNumber = Math.floor(Math.random() * 10); 
        const output = `${userName} - ${animals[randomNumber]}`;
        h3Element.innerHTML = output;
        btnElement2.style.display = "block";
        btnElement.disabled = true;
    } 
}
btnElement.addEventListener("click", showTheAnimal);
btnElement2.addEventListener("click", showTheAnimal);