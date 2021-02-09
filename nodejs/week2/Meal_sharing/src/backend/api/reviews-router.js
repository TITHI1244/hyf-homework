const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

// Respond with the json for all reviews
router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    throw error;
  }
});

// Respond with the json for the review with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const allIds = reviews.map(review => review.id);
    const reviewId = allIds.includes(parseInt(request.params.id)) ? parseInt(request.params.id) : 0;
    let reviewWithGivenId = "No review found with the given id...";
    if(reviewId !== 0) {
        reviewWithGivenId = reviews.filter(review => review.id === parseInt(request.params.id));
    }
    response.send(reviewWithGivenId);
  } catch (error) {
    throw error;
  }
});

module.exports = router;