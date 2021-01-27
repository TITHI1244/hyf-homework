// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const arrayOfFunctions = [function1, function2, function3];
function function1() {
    console.log("Logging from function 1");
}
function function2() {
    console.log("Logging from function 2");
}
function function3() {
    console.log("Logging from function 3");
}
arrayOfFunctions.map((item) => item());

// Create a function as a const and try creating a function normally. Call both functions.
const sameFunction1 = function() {
    console.log("Does the same-from const");
}
function sameFunction2() {
    console.log("Does the same-from function");
}
sameFunction1();
sameFunction2();

// Create an object that has a key whose value is a function. Try calling this function.
const animalObject = {
    legs: 4,
    eyes: 2,
    eatingHabit: function() {
        return "Eats grasses & leaves, herbivore";
    }
}
console.log(animalObject.eatingHabit());
