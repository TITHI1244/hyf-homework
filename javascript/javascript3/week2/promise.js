function logAfterDelay(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => {resolve("I am called from the Promise!")} ,resolveAfter * 1000)
    });
}

logAfterDelay(4).then((data) => {
    console.log(data); 
    console.log("I am called asynchronously.");
});

// same promise with async-await
async function logWithAsync(resolveAfter) {
    try {
        return await new Promise(resolve => {
            setTimeout(() => {resolve("I am called from the Promise with async-await!")} ,resolveAfter * 1000)
        })
    }
    catch(error) {
        throw "Something went wrong!!";
    }
}

logWithAsync(8).then((data) => {
    console.log(data); 
    console.log("I am called asynchronously second time.");
});