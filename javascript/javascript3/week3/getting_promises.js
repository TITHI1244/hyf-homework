const githubLinks = [
    {
        name: "Charmi",
        user_name: "ccshah298"
    }, {
        name: "Soujanya",
        user_name: "soujanyapolavarapu"
    }, {
        name: "Qamar",
        user_name: "qamarfj"
    }, {
        name: "Jyothi",
        user_name: "JyothiNandyala"
    }, {
        name: "Rajani",
        user_name: "rajanibusani"
    }, {
        name: "Beth",
        user_name: "cph-kiwi"
    }, {
        name: "Kjaw",
        user_name: "kyawbathit"
    }, {
        name: "Sandhana",
        user_name: "sandhana14"
    }, {
        name: "Aijaz",
        user_name: "aijazraja"
    }, {
        name: "Sofiia",
        user_name: "sofiiadidovych"
    }, {
        name: "Enqira",
        user_name: "Enqira"
    } , {
        name: "Dlnya",
        user_name: "DlnyaMazhari"
    }, {
        name: "Tithi",
        user_name: "TITHI1244"
    } 
];
const names = [];

function getRandomUsers() {
    const userArray = [];
    for(let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 13);
        let newUser = githubLinks[random].user_name;
        let newName = githubLinks[random].name;
        if(!userArray.includes(newUser)) {
            userArray.push(newUser);
            names.push(newName);
        } else {
            i--;
        } 
    }
    return userArray;
}

const randomUsers = getRandomUsers();
names.map((item,index) => {
    if(index === 2) {
        document.getElementsByClassName("students")[0].innerText += ` and ${item}.`;
    } else {
        document.getElementsByClassName("students")[0].innerText += `${item},`;
    }
})

let promise1;
let promise2;
let promise3;
randomUsers.map((item, index) => {
    let promiseNo = `promise${index}`;
    promiseNo = new Promise(resolve => {
        let returnedObject = {};
        setTimeout(() => {
            fetch(`https://api.github.com/search/repositories?q=user:${item}`)
            .then(response => response.json())
            .then(response => {
                let sorted = response.items.filter(item => item.name === "hyf-homework");
                returnedObject.fullName = sorted[0].full_name;
                returnedObject.url = sorted[0].url;
                returnedObject.owner = sorted[0].owner.login;
                document.getElementsByClassName("repositories")[index].innerText = sorted[0].full_name;
                document.getElementsByClassName("link")[index].innerText = sorted[0].url;
                document.getElementsByClassName("owner")[index].innerText = sorted[0].owner.login;
                console.log(returnedObject)
                resolve(returnedObject)
            })        
        }, 1000)
    })    
})

Promise.all([promise1, promise2, promise3]).then(values => {
    values.map(item => {console.log(item)})    
});