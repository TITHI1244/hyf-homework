const activities = [];

// Adding an activity
function addActivity(date, activity, duration) {
    let activityObject = {};
    activityObject.date = date; //new Date().toLocaleDateString()
    activityObject.activity = activity;
    activityObject.duration = duration;
    activities.push(activityObject);
}

addActivity("10.11.2020", "Youtube", 30);
addActivity("10.11.2020", "Facebook", 40);
addActivity("11.11.2020", "Youtube", 20);
addActivity("12.11.2020", "Youtube", 20);
console.log(activities);

// Show my status
// + Usage limit
const myLimit = 60;
function showStatus() {
    let totalSpentTime = 0;
    let status = "";
    if(activities.length === 0) {
        status = "Add some activities before calling showStatus";
    } else {
        for(let i = 0; i < activities.length; i++) {
            for(const [key, value] of Object.entries(activities[i])) {
                if(key === "duration") {
                    totalSpentTime += value;
                } 
            }
        } status = `You have added ${activities.length} activities. They amount to ${totalSpentTime} min. of usage`;
    }  
    if(myLimit <= totalSpentTime) {
        status = "You have reached your limit, no more smartphoning for you!";
    }  
    return status;
}
console.log(showStatus());
// todays' activity only
const todaysActivities = [];
function showStatusForToday() {
    for(let i = 0; i < activities.length; i++) {
        for(const [key, value] of Object.entries(activities[i])) {
            if((key === "date") && (value === new Date().toLocaleDateString())){
                todaysActivities.push(activities[i]);
                break;
            } 
        } 
    }
}
showStatusForToday();
console.log(todaysActivities);

// highest spent time
let facebookTime = 0;
let youtubeTime = 0;
function getHighestActivity() {
    for(let i = 0; i < activities.length; i++) {   
        for(const [key, value] of Object.entries(activities[i])) {
            if((key === "activity") && (value === "Facebook")) {
                facebookTime += activities[i].duration;
                break;
            } else if((key === "activity") && (value === "Youtube")) {
                youtubeTime += activities[i].duration;
                break;
            } 
        } 
    }
    return (Math.max(facebookTime, youtubeTime) === facebookTime) ?  "facebook" : "youtube";
}

console.log(`You mostly use ${getHighestActivity()} app.`);