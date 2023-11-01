// Functions
// It is a block of code which performs a task.

// const a = 1;
// const b = 2;
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// The advantage of using a function declaration is having an access to 'this' keyword.

// A functon expression
// Another way of declaring a function.

// const variableName = function(params)
// {
//      statements
// }

const say = function (name) {
  console.log(`Hello ${name}`);
};
say("Shruti");

// An arrow Function
// A modern way of writing functions in JavaScript.

// const varName = (params) =>
// {
//     // statements;
// }

const varriableName = (name) => {
  console.log(`Hello, ${name}`);
};
varriableName("Shruti");

const mul = (number) => {
  console.log();
};

// A short hand to declare arrow function if there is just one statement in the function
const mul1 = (number) => number * number;
console.log(mul1(2));

// Parameters and Arguments
// Parameter are used when defining a function.
// Arguments are passed when making a function call.

const sayHi = (name, age = 23) => {
  // by default we can make the value of age 23
  // to avoid undefined as a result when age is not being passed.
  // name and age are parameters here.
  console.log(`Hi ${name}, your age is ${age} years old`);
};
sayHi("Shruti");

// Scope
// There are three types of scope:
// 1.Global Scope
// 2.Function Scope
// 3.Block Scope

// Global Scope
// The global scope is the scope that contains, and is visible in, all othe scope.

const name = "Shruti";
const globalScope = () => {
  console.log(name);
};
globalScope();

// Local Scope
// Local variable have function scope.They can only be accessed from within the function.

const anyfunction1 = () => {
  let firstName = "shubham";
  console.log(firstName);

  const anyfunction2 = () => {
    console.log(firstName);
  };

  anyfunction2();
};

anyfunction1();

//Block Scope
// This scope ristricts the variale that is inside a specific block,from access by the outside of the block.

if (true) {
  var firstName = "Shruti";
}
console.log(firstName);

// Declaring a variable with var inside a blockscope can also let you access the variable in global scope.
