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

// Logical Operators
// It is used to determine the logic between variables or values.

// Logical Operators

// AND && => ALL OPERANDS ARE TRUE => TRUE
console.log(true && true && true); // true

// OR || => ATLEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false); // true

// NOT ! => Reverses the Boolean value
console.log(!true); // false

// The below line of code outputs 999,
// because it evaluates from left to right and
// it returns the last true value in the condition
console.log("truthy" && 1 && "test" && 999); // 999

// The below line of code outputs 0,
// because there is one false value in the
// entire condition and it will always return 0
console.log("truthy" && 0 && "test" && 999); // 0

// For OR operator
// The below line returns "truthy" because,
// when the first value of the condition is true,
// it doesn't check rest of the values.
console.log("truthy" || 0 || "test" || 999); // truthy

// The below line returns undefined,
// because it checks all the values and
// when all values are false, it returns the last one
console.log("" || 0 || null || undefined); // undefined

// Assignment Operators
// Asssignment operators assign a value to its left operand based on the value of right operand.
let num = 36;
num += 2;
console.log(num); // 36
