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
years >= 18
  ? console.log("You are eligible to vote")
  : console.log("You are mot eligible to vote");

// Loops
// The while loop loops through a block of code as long as a specified condition is true.
// while (condition){
// block of code;
// }

let i = 0;

// loop to display numbers from 0 to 9
while (i < 5) {
  console.log(i);
  i++;
}

// for loop
// The for statement creates a loop with 3 optional expressions.
// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }

// loop to display numbers from 0 to 9
for (let i = 0; i < 20; i++) {
  console.log(i);
}

// Switch Statement
// The switch statement is used to perform different actions based on different conditions.

// syntax ,
// switch (condition){
// case 'xyz':
// block of code;
// break;

// case 'abc':
// block of code;
// break;
// }

const car = "BMW";

switch (car) {
  case "Volvo":
    console.log("Volvo");
    break;

  case "Audi":
    console.log("Audi");
    break;

  case "BMW":
    console.log("BMW");
    break;

  default:
    console.log("Enter valid car name");
}
