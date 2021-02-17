const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// added reviews for all meals
function getAllMealsWithReviews() {
  meals.foreach(meal => {
    let matchedReviews = [];
    reviews.map(review => {
      if (meal.id === review.mealId) {
        matchedReviews.push(review);
      }
    })
    meal.reviews = matchedReviews;
    meal.reviews.map(review => delete review.mealId);  
  })
  return meals;
}

// get all the meals where price is below or equal 50
function getCheapMeals() {
    const mealsWithReviews = getAllMealsWithReviews();
    const cheapMeals = mealsWithReviews.filter(meal => meal.price <= 50);
    return cheapMeals;
}

// get all the meals where number of guests is above 10
function getLargeMeals() {
  const mealsWithReviews = getAllMealsWithReviews();
  const largeMeals = mealsWithReviews.filter(meal => meal.maxNumberOfGuests > 10);
  return largeMeals;
}

// get a random meal
function getRandomMeal() {
  const mealsWithReviews = getAllMealsWithReviews();
  const randomMeal = mealsWithReviews[Math.floor(Math.random() * meals.length)];
  return JSON.stringify(randomMeal);
}

// get a random reservation
function getRandomReservation() {
  const randomReservation = reservations[Math.floor(Math.random() * reservations.length)];
  return JSON.stringify(randomReservation);
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send(`Meal Sharing Web App`);
});

app.get("/meals", async (request, response) => {
  response.send(getAllMealsWithReviews());
});

app.get("/cheap-meals", async (request, response) => {
  response.send(getCheapMeals());
});

app.get("/large-meals", async (request, response) => {
  response.send(getLargeMeals());
});

app.get("/meal", async (request, response) => {
  response.send(getRandomMeal());
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(getRandomReservation());
});

module.exports = app;
