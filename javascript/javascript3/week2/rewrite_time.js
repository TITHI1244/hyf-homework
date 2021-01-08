function setTimeoutPromise(resolveAfterSeconds) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },resolveAfterSeconds)
    });
    return promise;
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

const getCurrentLocation = new Promise((resolve, reject) => {   
    mapLink.href = '';
    mapLink.textContent = '';
    navigator.geolocation.getCurrentPosition((position) => {
        if(navigator.geolocation) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            const pos = {lat: latitude, lon: longitude};
            resolve(pos);
        } else {
            reject('Geolocation is not supported by your browser')
        }
    });  
})
  
document.querySelector('#find-me').addEventListener('click', function() {
    getCurrentLocation
    .then((position) => {
        mapLink.textContent = `Latitude: ${position.lat}/ Longitude: ${position.lon}`;
    })
    .catch((error) => {
        status.innerText = error;
    });
});