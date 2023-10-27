// Conditional Statements

//Conditional statement are used to perform different actions based on different conditions.
// if,else,if else

const age = 8;

if (age >= 18) {
  console.log("You may enter");
} else if (age === 18) {
  console.log("You have just entered 18!");
} else {
  console.log("Grow up");
}

// FALSY VALUES - Excluding them all other values are TRUTHY VALUES
// false
// 0
// ''
// null
// undefined
// NaN

// SOME TRUTHY VALUES
// true
// 1
// "hello"
// 27 (any number)
// {} - empty object is also considered to be true
// [] - empty array is also considered to be true

const points = 10;

if (points) {
  console.log(`Congrats, you have won thw match by ${points} points`); // Congrats, you have won the match by 10 points.
} else {
  console.log("You don't have lost");
}

// Ternary Operator
// Syntax
// (condition) ? true : false
const years = 18;
years >= 18 ? console.log("You are eligible to vote") : console.log("You are mot eligible to vote");
