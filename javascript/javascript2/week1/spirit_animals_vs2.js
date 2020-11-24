//Create a h3 element and set the text to choose between options, finally append to the body
const h3ChoiceElement = document.createElement("h3");
h3ChoiceElement.innerHTML = "How would you like to find out your spirit animal?";
document.body.appendChild(h3ChoiceElement);

//Create a form element to check which option user selects, finally append to the body
const formElement = document.createElement("form");
document.body.appendChild(formElement);

// create first input element of type radio for button clicking, having id for further use and append it to the form
const radioInput1 = document.createElement("input");
radioInput1.setAttribute("type", "radio");
radioInput1.setAttribute("name", "user_choice");
radioInput1.setAttribute("value", "Click the button");
radioInput1.setAttribute("id", "click_button");
const radioLabel1 = document.createElement("label");
radioLabel1.setAttribute("for", "click_button");
radioLabel1.innerHTML = "Click the button";
formElement.appendChild(radioInput1);
formElement.appendChild(radioLabel1);

// create second input element of type radio for hovering over input, having id for further use and append it to the form
const radioInput2 = document.createElement("input");
radioInput2.setAttribute("type", "radio");
radioInput2.setAttribute("name", "user_choice");
radioInput2.setAttribute("value", "Hover over the input field");
radioInput2.setAttribute("id", "hover_input");
const radioLabel2 = document.createElement("label");
radioLabel2.setAttribute("for", "hover_input");
radioLabel2.innerHTML = "Hover over the input field";
formElement.appendChild(radioInput2);
formElement.appendChild(radioLabel2);

// create third input element of type radio for typing, having id for further use and append it to the form
const radioInput3 = document.createElement("input");
radioInput3.setAttribute("type", "radio");
radioInput3.setAttribute("name", "user_choice");
radioInput3.setAttribute("value", "While I type");
radioInput3.setAttribute("id", "while_typing");
const radioLabel3 = document.createElement("label");
radioLabel3.setAttribute("for", "while_typing");
radioLabel3.innerHTML = "While I type";
formElement.appendChild(radioInput3);
formElement.appendChild(radioLabel3);

// create a br element and append it to the body
const brElement = document.createElement("br");
document.body.appendChild(brElement);

// create an input element for inserting user name, having id for further use and append it to the body
const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "user_name");
inputElement.setAttribute("id", "user_input");
document.body.appendChild(inputElement);

// create a button element and append it to the body
const btnElement = document.createElement("button");
const btnText = document.createTextNode("Click me to find out!");
btnElement.appendChild(btnText);
document.body.appendChild(btnElement);

// create a h3 element and append it to the body, set the text to a primary value
const h3Element = document.createElement("h3");
h3Element.innerHTML = "Excited to find out??";
document.body.appendChild(h3Element);

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

// create a function which activates after the button click/hovering input/start typing, changes the h3 text into the spirit animal
function showTheAnimal() {
    const userName = document.getElementById("user_input").value;
    if(userName === "") {
        h3Element.innerHTML = "Please enter your name first!!!";
    } else {
        const randomNumber = Math.floor(Math.random() * 10); 
        const output = `${userName} - ${animals[randomNumber]}`;
        h3Element.innerHTML = output;
    } 
}

// get the option from the user, and call the function accordingly
let userChoice = "";
formElement.onclick = function() {
    userChoice = document.querySelector('input[name = user_choice]:checked').value;
    if(userChoice === "Click the button") {
        btnElement.addEventListener("click", showTheAnimal);
    } else if(userChoice === "Hover over the input field") {
        document.getElementById("user_input").addEventListener("mouseenter", showTheAnimal);
    } else if(userChoice === "While I type") {
        document.getElementById("user_input").addEventListener("keydown", showTheAnimal);
    } 
}