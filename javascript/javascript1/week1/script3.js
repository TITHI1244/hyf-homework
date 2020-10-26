// for Peter's house
let houseWidth = 8;
let houseHeight = 10;
let houseDepth = 10;
let volumeInMeters = houseWidth * houseHeight * houseDepth;
let gardenSizeInM2 = 100;
let houseCalculatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const PetersHouseActualPrice = 2500000;
let priceDifference = PetersHouseActualPrice - houseCalculatedPrice;

if(priceDifference > 0) {
    console.log("Peter is paying " + Math.abs(priceDifference) + " too much for the house.");
} else {
    console.log("Peter is paying " + Math.abs(priceDifference) + " too little for the house.");
}

// for Julia's house
houseWidth = 5;
houseHeight = 8;
houseDepth = 11;
volumeInMeters = houseWidth * houseHeight * houseDepth;
gardenSizeInM2 = 70;
houseCalculatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const JuliasHouseActualPrice = 1000000;
priceDifference = JuliasHouseActualPrice - houseCalculatedPrice;

if(priceDifference > 0) {
    console.log("Julia is paying " + Math.abs(priceDifference) + " too much for the house.");
} else {
    console.log("Julia is paying " + Math.abs(priceDifference) + " too little for the house.");
}