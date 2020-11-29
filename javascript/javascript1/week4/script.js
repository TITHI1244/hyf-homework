const userNames = [];
const myTodo = [];
function getReply(command) {
    const name = command.substring(17, command.length);
    let response = "";

    /* Hello my name is Benjamin - Should save the name benjamin. 
    and respond with "nice to meet you Benjamin". What if someone writes this twice?*/
    if(command.startsWith("Hello my name is ")) {
        if(userNames.includes(name)) {
            response = `Hi again ${name}.`;
        } else {
            response = `nice to meet you ${name}.`;
        }
    } 
    if((name !== undefined) && (name !== "") && (!userNames.includes(name))) {
        userNames.push(name);
    }
    // What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
    else if(command.startsWith("What is my name")) {
        if(userNames.length === 0) {
            response = `Hey there. Can you tell me your name first?`
        } else {
            response = userNames[userNames.length - 1];
        }
    }   
    // Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
    //Add singing in the shower to my todo - Should add singing in the shower to a list of todos
    if(command.startsWith("Add") && command.endsWith("to my todo")) { 
        let item = command.replace("Add ", "");
        let newTodo = item.replace(" to my todo", "");
        myTodo.push(newTodo);
        response = `${newTodo} added to your todo`;
        console.log(myTodo);
    }

    // Remove fishing from my todo - Should respond with "Removed fishing from your todo"
    else if(command.startsWith("Remove") && command.endsWith("from my todo")) {
        let item = command.replace("Remove ", "");
        let deleteTodo = item.replace(" from my todo", "");
        const itemIndex = myTodo.indexOf(deleteTodo);
        myTodo.splice(itemIndex, 1);
        response = `Removed ${deleteTodo} from your todo`;
        console.log(myTodo);
    }
    
    // What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
    else if(command.startsWith("What is on my todo")) {
        if(myTodo.length === 1) {
            response = `you have ${myTodo.length} todo - `;
        } else {
            response = `you have ${myTodo.length} todos - `; 
        }
        for(let i = 0; i < myTodo.length; i++) {
            if((i === myTodo.length - 1) && (myTodo.length !== 1)) {
                response += ` and ${myTodo[i]}`; 
            } else if(myTodo.length === 1) {
                response += `${myTodo[i]}`;
            } else if(i === myTodo.length - 2) {
                response += `${myTodo[i]}`;
            } else {
                response += `${myTodo[i]}, `; 
            }
        }
    }

    // What day is it today? - Should respond with the date in a human readable format.
    // E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
    else if(command.includes("What day is it today")) {
        const todaysDate = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        response = `${todaysDate.getDate()}. of ${months[todaysDate.getMonth()]} ${todaysDate.getFullYear()}`;
    }

    // Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
    else if (command.startsWith("what is")) {
        const commandWords = command.split(" ");
        const number1 = parseInt(commandWords[2]);
        const number2 = parseInt(commandWords[4]);
        const operation = commandWords[3];
        if (number1 && number2) {
            switch (operation) {
            case "+":
            return number1 + number2;
            case "-":
            return number1 - number2;
            case "*":
            return number1 * number2;
            case "/":
            return number1 / number2;
        }
    }
}

    // Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". 
    // When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
    else if(command.startsWith("Set a timer for ")) {
        const timerTime = parseInt(command.replace("Set a timer for ", ""));
        response = `Timer set for ${timerTime} seconds`;
        setTimeout(function(){
             console.log("Timer done");
        }, timerTime * 1000);
    }

    // Extra: Set an interval for 4 minutes and log every 3 seconds - Should respond with the time remaining. 
    // When 4 minutes is up: "Timer done". 
    else if(command.startsWith("Set an interval for ")) {
        const intervalTime = parseInt(command.replace("Set an interval for ", ""));  
        setTimeout(stopInterval, intervalTime * 1000);
        response = `Interval set for ${intervalTime} seconds`;
        function stopInterval() {
            clearInterval(intervalFunction);
            console.log("Done");
        } 
        const intervalFunction = setInterval(intervalLog, 3000);
        function intervalLog() {
            console.log('I am an alert message appear in every 3 seconds');
        }       
    }

    return response;
}
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 seconds"));
console.log(getReply("Set an interval for 10 seconds and log every 3 seconds"));