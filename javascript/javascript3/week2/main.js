const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const positions = [
    {x: 20, y: 300},
    {x: 400, y: 300}, 
    {x: 400, y: 20}
]
function translateOneByOne() {
    moveElement(redBox, positions[0])
    .then(() => {
        console.log("Red box has just moved!");
        moveElement(blueBox, positions[1])
        .then(() => {
            console.log("Blue box has just moved!!");
            moveElement(greenBox, positions[2])
            .then(() => {
                console.log("Green box has just moved!!!");
            })
        })
    })
    .catch(err => console.log(err));
}
translateOneByOne();
  
const promise1 = moveElement(redBox, positions[0]);
const promise2 = moveElement(blueBox, positions[1]);
const promise3 = moveElement(greenBox, positions[2]);

function translateAllAtOnce() {
    Promise.all([promise1, promise2, promise3])
    .then(() => {
        console.log("All the boxes have just moved.")
    })
}
// translateAllAtOnce();