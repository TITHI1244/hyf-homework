const travelInformation = {
    speed: 50,
    destinationDistance: 432
};

function calculateTravelTime(infoObject) {
    let travelTime = infoObject.destinationDistance / infoObject.speed;
    let travelTimeInHours = Math.floor(travelTime);
    let travelTimeInMinutes = Math.floor((travelTime - travelTimeInHours) * 60);
    let stringVal = `${travelTimeInHours} hours and ${travelTimeInMinutes} minutes`;
    return stringVal;
}

console.log(calculateTravelTime(travelInformation)); 