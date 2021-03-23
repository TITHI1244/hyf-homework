const image1 = document.getElementById("random-dog-image1");
const image2 = document.getElementById("random-dog-image2");
const randomNo1 = Math.floor(Math.random() * 94);
const randomNo2 = Math.floor(Math.random() * 94);
setInterval(function() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(response => {
        const randomKey = Object.keys(response.message);
        const randomBreed = randomKey[randomNo1];
        const randomBreedLink = "https://dog.ceo/api/breed/" + randomBreed + "/images/random";
        fetch(randomBreedLink)
        .then(response => response.json())
        .then(response => {
            image1.setAttribute("src", response.message)
        })
    })
}, 3000);

setInterval(async function() {
    const breedsResponse = await fetch("https://dog.ceo/api/breeds/list/all");
    const listOfBreeds = await breedsResponse.json();
    const randomKey = Object.keys(listOfBreeds.message);
    const randomBreed = randomKey[randomNo2];
    const randomBreedLink = "https://dog.ceo/api/breed/" + randomBreed + "/images/random";
    const linkResponse = await fetch(randomBreedLink);
    console.log(linkResponse)
    const imageLink = await linkResponse.json();
    const link = await imageLink.message;
    console.log(link)
    image2.setAttribute("src", link);
}, 3000);