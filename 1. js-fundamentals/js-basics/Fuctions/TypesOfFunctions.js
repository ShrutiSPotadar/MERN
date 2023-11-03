// There are multiple ways of declaring function.
// A function declaration(defining a function)
// function name(params)
// {
//      statements
// }

// The advantage of using a function declaration is having a access to this keyword.

// A function expression
// const name = function(params)
// {
//     statements
// }

// Arrow function
// const name = (params) =>
// {
//     statements
//

// The below function will print the sum and return undefined
function add(a, b) {
  console.log(a + b);
}

const ans = add(3, 3);

// Undefined will be printed out
console.log(ans);
