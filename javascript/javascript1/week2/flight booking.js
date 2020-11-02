// Flight booking fullname function
function getFullname(firstname, surname) {
    return firstname + ' ' + surname;
}
const fullname1 = getFullname("John", "Doe");
const fullname2 = getFullname("Jane", "Doe");
console.log(`The first name is:  ${fullname1} 
and the second one is: ${fullname2}.`);

// Formal fullname
function getFullname(firstname, surname, useFormalName)  {
    return useFormalName ? 'Lord ' + firstname + ' ' + surname : firstname + ' ' + surname;
}
const formalFullname1 = getFullname("John", "Doe", true);
const formalFullname2 = getFullname("Jane", "Doe", false);
console.log(`The first name is:  ${formalFullname1} 
and the second one is: ${formalFullname2}.`);