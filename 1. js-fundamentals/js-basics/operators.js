//Arithmetic Operators
const a = 20;
const b = 10;
let res = 0;

// Addition
res = a + b;
console.log(res);

//Substration
res = a - b;
console.log(res);

//Division
res = a / b;
console.log(res);

//Multiplication
res = a * b;
console.log(res);

//Modulus
res = a % b;
console.log(res);

//Exponent
res = a ** b;
console.log(res);

//Increment and Decrement
res++;
res--;

//Comparision Operator
const num1 = 5;
const num2 = 10;

// Greater than
console.log(num1 > num2); // false

// Greater than equal to
console.log(num1 >= num2); // false

// Less than
console.log(num1 < num2); // true

// Less than equal to
console.log(num1 <= num2); // true

// Loose equality
// Doesn't compare the DATA TYPES
console.log(num1 == num2); // false

// Not equal
console.log(num1 != num2); //true

// Strict Equality
// Compares VALUES and DATA TYPES
// Returns true only if both are the same
console.log(num1 === num2); //false

// Strict Inequality
console.log(num1 !== num2); //true
