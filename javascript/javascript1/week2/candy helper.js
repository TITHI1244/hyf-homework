// Candy helper
let boughtCandyPrices = [];
let totalPrice = 0;
const amountToSpend = Math.random() * 100;
function addCandy(candyType, weight) {
    let pricePerGram;
    switch(candyType) {
        case "Sweet":
            pricePerGram = 0.5;
            break;
        case "Chocolate":
            pricePerGram = 0.7;
            break;
        case "Toffee":
            pricePerGram = 1.1;
            break;
        case "Chewing-gum":
            pricePerGram = 0.03;
            break;
    }
    boughtCandyPrices.push(pricePerGram * weight);
    return boughtCandyPrices;
}
function calculateTotalPrice() {
    let i = 0;
    while(i < boughtCandyPrices.length) {
        totalPrice += boughtCandyPrices[i];
        i++;
    }
    return totalPrice;
}
function canBuyMoreCandy() {
    if(amountToSpend < totalPrice) {
        console.log("Enough candy for you!");
    } else {
        console.log("You can buy more, so please do!");
    }
}
addCandy("Sweet", 15);
addCandy("Chocolate", 25);
addCandy("Chewing-gum", 1000);
addCandy("Toffee", 10);
calculateTotalPrice();
console.log(`You have now ${amountToSpend} kr. &
You have already spent ${totalPrice}.`);
canBuyMoreCandy();