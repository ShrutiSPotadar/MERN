// Object
// object is an unordered collection of related date in form of key value pair

const person = {
  firstName: "Shruti",
  lastName: "Potadar",
  age: 23,
  car: {
    brand: "Mercedes",
    year: 2020,
  },
};

console.log("person ", person);

// Dot Notation
console.log("person ", person.car.brand);

// Square Notation
const property = "age";
console.log(person[property]);

// Onject.keys
// object.keys create an aray containing tje keys of an object.

const details = {
  firstName: "Shruti",
  lastName: "Potadar",
  age: 23,
};

// Let's say we want to see all the positions(keys) in the employee object
const postions = Object.keys(details);
console.log(postions);

// Object.values() creates an array containg the values of an object.
const session = Object.values(details);
console.log(session);

// Entries - Object.entries creates an array containg key/value of an object.

const details1 = {
  firstName: "Shruti",
  lastName: "Potadar",
  age: 23,
};
const ele = Object.entries(details1);
console.log(ele);

// Object Seal
// Object.seal() prevents new properties
// from being added to an object,
// but allows the modification of existing properties
const object1 = {
  username: "Shruti",
  password: "12345",
};
const newUser = Object.seal(object1);

newUser.username = "Shruti"; // The username will be changed
newUser.age = 23; // the age property will not be added because we applied Object.seal()

console.log(object1);
