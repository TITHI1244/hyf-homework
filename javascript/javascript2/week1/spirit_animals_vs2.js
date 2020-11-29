"use strict"
// the array of spirit animals
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
let h3Element = document.getElementById("output_string");
let nameField = document.getElementById("user_input");
const btnElement = document.getElementById("click_to_see");

// create a function which activates after the button click/hovering input/start typing, changes the h3 text into the spirit animal
function showTheAnimal() {
    const userName = document.getElementById("user_input").value;
    if(userName !== "") {
        const randomNumber = Math.floor(Math.random() * 10); 
        const output = `${userName} - ${animals[randomNumber]}`;
        h3Element.innerHTML = output;
    }
}

function removeAllPrevious() {
    document.getElementById("user_input").value = "";
    h3Element.innerHTML = "Please enter your name first!!!";
    btnElement.removeEventListener("click", showTheAnimal);
    nameField.removeEventListener("mouseenter", showTheAnimal);
    nameField.removeEventListener("keydown", showTheAnimal);
}

// get the option from the user, and call the function accordingly
let userChoice = "";
document.getElementById("user_choice_form").onclick = function() {
    userChoice = document.querySelector('input[name = user_choice]:checked').value;
    removeAllPrevious();
    if(userChoice === "Click the button") {
        btnElement.addEventListener("click", showTheAnimal);
    } else if(userChoice === "Hover over the input field") {
        nameField.addEventListener("mouseenter", showTheAnimal);
    } else if(userChoice === "While I type") {
        nameField.addEventListener("keydown", showTheAnimal);
    } 
}