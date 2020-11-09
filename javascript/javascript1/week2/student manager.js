// Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName !== "") {
        if(class07Students.includes(studentName)) {
            console.log("Student " + studentName +  " is already in the class");
        } else {
            if(class07Students.length < 6) {
                class07Students.push(studentName);
            } else if(studentName === "Queen") {
                class07Students.push(studentName);
            } else {
                console.log("Sorry! The class is already full. Try again next session.");
            }  
        }
    } else {
        console.log("Add some name first.");
    }
    return class07Students;
}

function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass("John");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Jane");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("John");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Alice");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Robert");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Mia");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Anders");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Theresa");
console.log(`the class looks like:  ${class07Students}.`);
addStudentToClass("Queen");
console.log(`the class looks like:  ${class07Students}.`);
console.log(`the class has  ${getNumberOfStudents()} students.`);
addStudentToClass("");
console.log(`the class looks like:  ${class07Students}.`);