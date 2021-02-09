const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

// Respond with the json for all the meals & different queries
router.get("/", async (request, response) => {
  console.log(request.query)
  const limit = parseInt(request.query.limit) > 0 ? parseInt(request.query.limit) : Math.max(...meals.map(meal => meal.id));
  const maxPrice = parseInt(request.query.maxPrice) > 0 ? parseInt(request.query.maxPrice) : Math.max(...meals.map(meal => meal.price));
  const title = (request.query.title !== '' && request.query.title !== undefined) ? request.query.title.toLowerCase() : '';
  const firstCreatedDate = Math.min(...meals.map(meal => Date.parse(meal.createdAt)));
  const createdAfter = (request.query.createdAfter !== '' && request.query.createdAfter !== undefined) ? Date.parse(request.query.createdAfter) : firstCreatedDate;
  try {
    const filteredMeals = meals.filter(meal => 
      meal.price <= maxPrice && meal.title.toLowerCase().includes(title) && Date.parse(meal.createdAt) > createdAfter
    ).slice(0, limit);
    response.send(filteredMeals);
  } catch (error) {
    throw error;
  }
});

// Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const mealWithGivenId = meals.filter(meal => meal.id === parseInt(request.params.id));
    response.send(mealWithGivenId);
  } catch (error) {
    throw error;
  }
});

module.exports = router;