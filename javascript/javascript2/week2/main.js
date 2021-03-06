"use strict"
console.log("Script loaded");

let products = getAvailableProducts();
const lovedProducts = document.getElementById("loved-prducts");
let lovedProductsNumber = parseInt(lovedProducts.innerHTML);
// after clicking the 'like_product' button, remove it
function addProduct(product) {
    lovedProducts.innerHTML = ++lovedProductsNumber;
    const targetedButtonId = product.target.parentElement.id;
    const targetedButton = document.getElementById(targetedButtonId).childNodes[4];
    document.getElementById(targetedButtonId).removeChild(targetedButton);
}

function renderProducts(products) {
    const renderedDivElement = document.getElementById("rendered-products");
    renderedDivElement.innerHTML = "";
    // create a ul element and append to the body
    const ulElement = document.createElement("ul");
    renderedDivElement.appendChild(ulElement);

    for(let product of products) {
        // create a li element and append to the ul
        const liElement = document.createElement("li");
        liElement.classList.add("card");
        ulElement.appendChild(liElement);

        const imgElement = document.createElement("img");
        imgElement.src = "https://picsum.photos/200";
        liElement.appendChild(imgElement);

        // create a h1 element and append to the li, assign the product name to its text
        const h2Element = document.createElement("h2");
        h2Element.innerHTML = product.name;
        liElement.appendChild(h2Element);

        // create a span element and append to the li, assign the product price to its text
        const divElement = document.createElement("div");
        divElement.innerHTML = `Price: ${product.price}`;
        liElement.appendChild(divElement);

        // create another span element and append to the li, assign the product rating to its text
        const spanElement2 = document.createElement("span");
        spanElement2.innerHTML = `Rating: ${product.rating}`;
        liElement.appendChild(spanElement2);

        // create another span element and append to the li, assign the heart icon to its text
        const buttonElement = document.createElement("button");
        buttonElement.innerHTML = `&#9825;`;
        buttonElement.classList.add("add-item");
        liElement.appendChild(buttonElement);
        liElement.id = h2Element.innerHTML.slice(0, 1) + product.rating;
        // add event listener after clicking the like button
        const likeButtons = document.getElementsByClassName("add-item");
        const likeButtonsArray = Array.from(likeButtons);
        likeButtonsArray.forEach((button) => button.addEventListener("click", addProduct));
    }
}

renderProducts(products);
// Get all the user input values and save
const inputElement1 = document.getElementById("search-products-name");
const inputElement2 = document.getElementById("search-min-price");
const inputElement3 = document.getElementById("search-max-price");
const inputElement4 = document.getElementById("search-products-rating");
const filterButton = document.getElementById("filter-button");
// Set some initial values; for prices, if user does not specify any values, take the lowest and highest prices as min and maxPrice
const productsPrice = products.map((product) => product.price);
let minPrice = productsPrice.reduce((accumulator, currentValue) => (accumulator < currentValue) ? accumulator : currentValue, products[0].price);
let maxPrice = productsPrice.reduce((accumulator, currentValue) => (accumulator > currentValue) ? accumulator : currentValue, products[0].price);
let minRating = 0;

function onNameChange(event) {
    renderProducts(products.filter((product) => product.name.toLowerCase().startsWith(event.target.value.toLowerCase())));
}
// After clicking on filter button, set the predefined variebles as per user choice and call render method
function getFilteredProducts() {
    if(inputElement2.value !== "") {
        minPrice = inputElement2.value;
    } if(inputElement3.value !== "") {
        maxPrice = inputElement3.value;
    } if(inputElement4.value !== "") {
        minRating = inputElement4.value;
    } 
    renderOnFilter(minPrice, maxPrice, minRating);
}
// Combine all the price & rating criterias
function renderOnFilter() {
    renderProducts(products.filter((product) => (product.price >= minPrice && product.price <= maxPrice && product.rating >= minRating)));
}
inputElement1.addEventListener("input", onNameChange);
filterButton.addEventListener("click", getFilteredProducts);

document.getElementById("currentYear").innerHTML = new Date().getFullYear();