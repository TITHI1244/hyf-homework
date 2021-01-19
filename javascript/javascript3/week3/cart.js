"use strict"
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    // according to a given currency, return certain value of the default price in DKK
    convertToCurrency(currency) {
        let newPrice;
        switch(currency.toUpperCase()) {
            case "USD": 
                newPrice = Math.floor(this.price * 0.17);
                break;
            case "EUR": 
                newPrice = Math.floor(this.price * 0.13);
                break;
            case "GBP":
                newPrice = Math.floor(this.price * 0.12);
                break;
            default:
                newPrice = "unknown";
        }
        return newPrice;
    }
}

class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(product) {
      const removalIndex = this.products.indexOf(this.products.find(item => item.name === product.name))
      this.products.splice(removalIndex, 1);
      this.renderProducts();
    }
  
    searchProduct(productName) {
      return this.products.filter(item => item.name === productName);
    }
  
    getTotal() {
      const totalPrice = this.products.map(item => item.price).reduce((acc, cur) => acc + cur);
      totalInCart.innerText = this.products.length;
      return totalPrice;
    }
  
    renderProducts() {
        allProducts.innerHTML = "";
        this.products.map(item => {
          const card = document.createElement("div"); //a card div, holding everything of 1 product
          card.classList.add("card");
          allProducts.appendChild(card); 
          const imgDiv = document.createElement("div"); //image div, holding image of 1 product
          imgDiv.classList.add("img-div");
          card.appendChild(imgDiv);
          const image = document.createElement("img");
          image.setAttribute("src", "https://picsum.photos/200");
          imgDiv.appendChild(image);
          const infoDiv = document.createElement("div"); //info div, holding name and price of 1 product
          infoDiv.classList.add("info-div");
          card.appendChild(infoDiv);
          const itemName = document.createElement("h3");
          itemName.innerText = item.name;
          infoDiv.appendChild(itemName);
          const itemPrice = document.createElement("h3");
          itemPrice.innerText = `Dkk ${item.price}`;
          itemPrice.classList.add("item-price");
          infoDiv.appendChild(itemPrice);  
          const inputDiv = document.createElement("div"); // input div, holding no of products and remove button for 1 product
          inputDiv.classList.add("input-div");
          card.appendChild(inputDiv);
          const noInput = document.createElement("h3");
          noInput.innerText = "1";
          inputDiv.appendChild(noInput); 
          const removeButton = document.createElement("button");
          removeButton.innerHTML = "&times;";
          removeButton.addEventListener("click", () => {
              this.removeProduct(item); // call removeProduct method to remove a certain product
          })
          inputDiv.appendChild(removeButton);
      })
      const totalPrice = this.getTotal();
      const total = document.createElement("div");
      total.classList.add("total-div"); // total div, holding total price for added products
      allProducts.appendChild(total);
      const price = document.createElement("h3");
      price.innerText = `Dkk ${totalPrice}`;
      total.appendChild(price);
    }
  
    getUser() {
      fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(response => {
          user.innerText = response.name;
          userEmail.innerText = response.email;
          userPhone.innerText = response.phone;
          userAddress.innerText = `
          Suite: ${response.address.suite},
           Street: ${response.address.street},
            City: ${response.address.city},
             Zipcode: ${response.address.zipcode}`;
      })
    }
  }
function createModal(productName) { // create a modal box to show details about one searched product
    modal.style.display = "block";
    const price = shoppingCart.products.filter(item => item.name === productName).map(item => item.price)[0];
    document.getElementById("product-name").innerText = productName;
    document.getElementById("product-quantity").innerText = "1";
    document.getElementById("product-price").innerText = price;
}
function renderSearched(searched, letters) { // render searched products and style the part of texts, that match user input 
    document.getElementById("searched-products").innerHTML = "";
    searched.map(item => {
        const searchedItem = document.createElement("li");  
        const link = document.createElement("a");
        const boldLetters = document.createElement("span");
        const bold = item.substring(0, letters);
        const regular = item.substring(letters, item.length);
        link.innerText = regular;
        boldLetters.innerText = bold;
        boldLetters.style.fontWeight = "bold"; 
        link.prepend(boldLetters);
        searchedItem.appendChild(link);       
        document.getElementById("searched-products").appendChild(searchedItem);
        searchedItem.addEventListener("click", function() {
            createModal(item); // if user clicks on a searched product, show its details creating a modal
        });
    })
}
function hideModal() {
    modal.style.display = "none";
}
const modal = document.getElementById("modal");
const modalClose = document.getElementsByClassName("close")[0];
modalClose.addEventListener("click", hideModal);
window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}
// variables for adding products through Product class to the shopping cart and append
const allProducts = document.getElementById("products");
let totalInCart = document.getElementById("total-in-cart");
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat screen", 5000);
shoppingCart.addProduct(flatscreen);
const washingMachine = new Product("Washing machine", 50000);
shoppingCart.addProduct(washingMachine);
const washingLiquid = new Product("Washing liquid", 100);
shoppingCart.addProduct(washingLiquid);
const eggBeater = new Product("Egg beater", 500);
shoppingCart.addProduct(eggBeater);
const shoes = new Product("Shoes", 2000);
shoppingCart.addProduct(shoes);
const runningWatch = new Product("GPS running watch", 5000);
shoppingCart.addProduct(runningWatch);
const painting = new Product("Painting", 500);
shoppingCart.addProduct(painting);
const candles = new Product("Candles", 5000);
shoppingCart.addProduct(candles);
shoppingCart.renderProducts();
shoppingCart.getUser();
// search a product by name and show the modal box for a specific product
const search = document.getElementById("search");
search.addEventListener("input", function(event) {
    let searched = shoppingCart.products.filter(item => item.name.toUpperCase().startsWith(event.target.value.toUpperCase())).map(item => item.name);
    if(event.target.value === "") {
        searched = [];
        modal.style.display = "none";
    } 
    renderSearched(searched, event.target.value.length);
});
// convert into different currencies
const currencies = ["usd", "eur", "gbp"];
const currencyButtons = [document.getElementById("usd"), document.getElementById("eur"), document.getElementById("gbp")];
for(let i = 0; i < currencyButtons.length; i++) {
    currencyButtons[i].addEventListener("click", function() {
        let priceTotal = 0;
        shoppingCart.products.map((item, index) => {
            const currentPrice = item.convertToCurrency(currencies[i]);
            priceTotal = priceTotal + parseInt(currentPrice);
            console.log(priceTotal)
            console.log(currentPrice)
            document.getElementsByClassName("item-price")[index].innerText = `${currencies[i].toUpperCase()} ${currentPrice}`;
        })
        document.getElementsByClassName("total-div")[0].innerText = `Total: ${priceTotal}`;
    })
}
// variables for user info modal box
let user = document.getElementsByClassName("user-name")[0];
let userEmail = document.getElementsByClassName("user-email")[0];
let userPhone = document.getElementsByClassName("user-phone")[0];
let userAddress = document.getElementsByClassName("user-address")[0];
// show user info in a modal
const checkoutModal = document.getElementById("checkout-modal");
const proceedButton = document.getElementById("checkout");
proceedButton.addEventListener("click", function() {
    checkoutModal.style.display = "block";
})
const checkedBtn = document.getElementsByClassName("checked")[0];
checkedBtn.addEventListener("click", function() {
    checkoutModal.style.display = "none";
})
// get current year for footer
document.getElementById("currentYear").innerHTML = new Date().getFullYear();