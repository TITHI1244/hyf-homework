"use strict"
console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    // create a ul element and append to the body
    const ulElement = document.createElement("ul");
    document.body.appendChild(ulElement);

    for(let product of products) {
        // create a li element and append to the ul
        const liElement = document.createElement("li");
        ulElement.appendChild(liElement);

        // create a h1 element and append to the li, assign the product name to its text
        const h2Element = document.createElement("h2");
        h2Element.innerHTML = product.name;
        liElement.appendChild(h2Element);

        // create a span element and append to the li, assign the product price to its text
        const divElement = document.createElement("div");
        divElement.innerHTML = `price: ${product.price}`;
        liElement.appendChild(divElement);

        // create another span element and append to the li, assign the product rating to its text
        const spanElement2 = document.createElement("span");
        spanElement2.innerHTML = `Rating: ${product.rating}`;
        liElement.appendChild(spanElement2);
    }
}

renderProducts(products);
