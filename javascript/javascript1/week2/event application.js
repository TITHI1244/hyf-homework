// Event application
function calculateEventDay(dayIndex) {
    let returnedDay;
    switch(dayIndex){
        case 0:
            returnedDay = "Sunday";
            break;
        case 1:
            returnedDay = "Monday";
            break;
        case 2:
            returnedDay = "Tuesday";
            break;
        case 3:
            returnedDay = "Wednesday";
            break;
        case 4:
            returnedDay = "Thursday";
            break;
        case 5:
            returnedDay = "Friday";
            break;
        case 6:
            returnedDay = "Saturday";
            break;
    }
    return returnedDay;
}
function getRemainder(days) {
    return days % 7;
}

let currentDayIndex = new Date().getDay();
const remainingDays = 9;
let eventDayIndex = getRemainder(remainingDays + currentDayIndex);
console.log(`The event day is:  ${calculateEventDay(eventDayIndex)}.`);