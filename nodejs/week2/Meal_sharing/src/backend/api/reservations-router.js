const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

// Respond with the json for all reservations
router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

// Respond with the json for the reservation with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const allIds = reservations.map(reservation => reservation.id);
    const reservationId = allIds.includes(parseInt(request.params.id)) ? parseInt(request.params.id) : 0;
    let reservationWithGivenId = "No reservation found with the given id...";
    if(reservationId !== 0) {
        reservationWithGivenId = reservations.filter(reservation => reservation.id === parseInt(request.params.id));
    }
    response.send(reservationWithGivenId);
  } catch (error) {
    throw error;
  }
});

module.exports = router;