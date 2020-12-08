// Log out the text Called after 2.5 seconds after the script is loaded.
window.addEventListener("load", function() {
    console.log("Wait for 2.5 seconds...'log from task 1'");
    setTimeout(function() {
        console.log("Called after 2.5 seconds. 'log from task 1'");
    }, 2500)
});

/* Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should log out the stringToLog after delay seconds. 
Call the function you have created with some different arguments. */
function logAfterDelayWithParameter (delay, stringToLog) {
    console.log(`Wait for ${delay / 1000} seconds... 'log from task 2'`)
    setTimeout(function() {
        console.log(stringToLog);
    }, delay)
}
logAfterDelayWithParameter(4000, "This string logged after 4 seconds. 'log from task 2'");
logAfterDelayWithParameter(2000, "This string logged after 2 seconds. 'log from task 2'");

/* Create a button in html. When clicking this button, use the function you created in the previous task to log out the text:
 Called after 5 seconds 5 seconds after the button is clicked. */
const button = document.getElementById("clicker");
button.addEventListener("click", function() {
    logAfterDelayWithParameter(5000, "Called after 5 seconds 'log from task 3'");
});

/* Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn.
 Now create a new third function that has one parameter: planetLogFunction. 
 The only thing the third function should do is call the provided parameter function. 
 Try call the third function once with the Earth function and once with the Saturn function. */
const earthLogger = function() {
    console.log("I am from Earth, 'log from task 4'");
}
const saturnLogger = function() {
    console.log("I am from Saturn, 'log from task 4'");
}
function planetLogFunction(chosenPlanet) {
    chosenPlanet();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

/* Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude)
 of the user should be logged out using this browser api */
function geoFindMe() {
    const status = document.getElementById("geo-status");
    const mapLink = document.getElementById("map-link");
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `This is the Latitude: ${latitude} °. This is the Longitude ${longitude} °`;
      mapLink.style.textDecoration = "none";
      mapLink.style.color = "black";
    }
  
    function error() {
      status.textContent = "Unable to retrieve your location";
    }
  
    if(!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
document.getElementById("tracker").addEventListener("click", geoFindMe);

// Now show that location on a map using fx the Google maps api
// let map;
// function initMap() {
// map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//     });
// }
// initMap();

/* Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback function. 
Try and call this function with different delays and different callback functions. */
function runAfterDelay(delay, callback) {
    console.log(`Wait for ${delay} seconds... 'log from task 7'`);
    setTimeout(callback, delay * 1000);
}
runAfterDelay(3, function() {
    console.log("Logged after 3 seconds. 'log from task 7'");
});

/* Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!" */
document.addEventListener("dblclick", function() {
    console.log("double click");
});

/* Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
 logFunnyJoke - function and logBadJoke - function. 
 If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa. */
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    (shouldTellFunnyJoke === true) ? logFunnyJoke() : logBadJoke();
}
jokeCreator(true, function() {
    console.log("Hahaha! It's a damn funny joke!!!")
}, function() {
    console.log("Seriously!!! Let's try to forget it...")
});