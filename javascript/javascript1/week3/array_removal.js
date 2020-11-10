const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Yana";
  // Write some code here
  const indexToBeRemoved = names.indexOf(nameToRemove);
  names.splice(indexToBeRemoved, 1);
  // Code done
  
  console.log(names); 