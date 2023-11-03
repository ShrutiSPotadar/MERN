// Arrow Function

const mul = (number) => {
  return number * number;
};

// A short hand to declare arrow function if there is only one statement in the function.
const mul1 = (n) => n * n;
const mul2 = 2;
console.log(mul2);

// Difference between parameters and Arguments
// Prameters => used when defining a function.
// Arguments => passed when making a functio call.

const msg = (name, age = 23) => {
  // By default the we can make value of age will be 0, to avoid undefined as a result when age is not being passed.

  // name is a paramter
  console.log(`Hi ${name}, you are ${age} years old!`);
};

msg("Shruti"); // 'Shruti' is an argument value that is being passed
