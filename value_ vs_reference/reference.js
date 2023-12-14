// Copy by Reference
// The block of code demonstrate that how variable in javascript can be copied by reference rather the by the value.
// When you assign an array or object to new variable is simply a reference to the original array or object.
// This means that any changes made to the original array or object will also be reflected in the copied variable, because they are both pointing to the same memory location.

const animal = ["dogs", "cats"];
const otherAnmals = animal;

animal.push("pig");
console.log(animal);

// Shallow Cloning
// A shallow copy is a copy that only includes the top-level properties
// of the original array or object, rather than copying all nested properties as well.
// The first way to create a shallow copy is to use the spread operator (...). This creates a new array or object with the same properties as the original, but they are not nested.
//  The second way to create a shallow copy is to use the Array.slice() or Object.assign() methods.
// These methods work similarly to the spread operator, but they are more specific to arrays and objects, respectively.

// Spread Operator
const num = [1, 2, 3, 4, 5];
const copynum = num;
const newNum = [...num];

num.push(6);
console.log(num);
console.log(copynum);
console.log(newNum);

// Array.slice
const num1 = [1, 2, 3, 4, 5];
const copynum1 = num;
const newNum1 = num.slice();

num.push(6);
console.log(num1);
console.log(copynum1);
console.log(newNum1);

// Deep Coloning
// A deep copy is a copy that includes all nested properties of the original object, rather than just the top-level properties.
// To create a deep copy, the code uses the JSON.stringify() and JSON.parse() methods.
// JSON.stringify() converts an object to a JSON string, which is a format that can be easily stored or transmitted.
// JSON.parse() converts a JSON string back into an object.
// By using these methods, the code is able to create a deep copy of the original object,
// which can be modified independently without affecting the original object.

const person = {
  name: "Shruti",
  car: {
    brand: "minicooper",
    colour: "blue",
    wheels: 4,
  },
};

const newPerson = JSON.stringify(person);
const updatedPerson = JSON.parse(newPerson);
updatedPerson.car.colour = "Black";

console.log("person ", person);
console.log("updatedPerson ", updatedPerson);
