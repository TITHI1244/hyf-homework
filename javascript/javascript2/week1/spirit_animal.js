// create an input element, having id for further use and append it to the body
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

// create a h3 tag and append it to the body, set the text to a primary value
const h3Element = document.createElement("h3");
h3Element.innerHTML = "Excited to find out??";
document.body.appendChild(h3Element);

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

// create another button element to see a new spirit animal and append it to the body
const btnElement2 = document.createElement("button");
const btnText2 = document.createTextNode("Oh no! Check again.");
btnElement2.appendChild(btnText2);
document.body.appendChild(btnElement2);
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