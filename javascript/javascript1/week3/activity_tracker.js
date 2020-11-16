const activities = [];

// Adding an activity
function addActivity(date, activity, duration) {
    let activityObject = {
        date: date, //new Date().toLocaleDateString()
        activity: activity,
        duration: duration
    }
    activities.push(activityObject);
}

addActivity("10.11.2020", "Youtube", 30);
addActivity("10.11.2020", "Facebook", 40);
addActivity("11.11.2020", "Facebook", 20);
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
            totalSpentTime += activities[i].duration;
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
    for(let activity of activities) {
        if(activity.date === new Date().toLocaleDateString()) {
            todaysActivities.push(activity);
        }
    }
}
showStatusForToday();
console.log(todaysActivities);

// highest spent time
let facebookTime = 0;
let youtubeTime = 0;
function getHighestActivity() {
    for(let activity of activities) {
        if(activity.activity === "Facebook") {
            facebookTime += activity.duration;
        } else if(activity.activity === "Youtube") {
            youtubeTime += activity.duration;
        }
    }
    return (Math.max(facebookTime, youtubeTime) === facebookTime) ?  "facebook" : "youtube";
}

console.log(`You mostly use ${getHighestActivity()} app.`);