// Weather wear
function getPerfectCloths(temp) {
    if(temp <= 0) {
        return "Snowsuit and showboots";
    } else if(temp <= 10) {
        return "Sweatshirt and sneakers";
    } else {
        return "T-shirt and slippers";
    }
}
const clothsToWear = getPerfectCloths(-10);
console.log(`You are supposed to wear:  ${clothsToWear}.`);