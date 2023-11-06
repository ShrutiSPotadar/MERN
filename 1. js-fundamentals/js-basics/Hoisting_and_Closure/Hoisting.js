// Hoisting in JavaScript
// Bringing the variables to the top of the scope.
// Only the variable declaration gets to the top

console.log(age);
var age = 23;

// The function will be executed even
// if the function call is done before the function declaration
hoist();

function hoist() {
  var msg = "Hi";
  console.log(msg);
}

// Does not support const and let keyword
console.log(num);
const num = 10;
