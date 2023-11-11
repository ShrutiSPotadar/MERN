// There are three types of strings
// Strings wrapped up with single and double quotes are just plain txt
const single = "Hi, this is a normal text";
console.log(single);
const doublequote = "Hi, this is also a normal texat";
console.log(doublequote);

// String wrapped inside a backtick has extended functionality
// const backTick = `An extended Functionality provided to strings`;

const sum = (a, b) => a + b;
console.log(`I want to add ${sum(5, 6)}`);

// How to get length of a string
const firstName = "You are a good person";
const firstLetter = firstName[0];
const lastLetter = firstName[firstName.length - 1];

console.log(firstLetter, lastLetter);

// Uppercase and Lowercase
// To make a string Uppercase the toUpperCase() method is being called.
// To make a string Lowercase the toLowerCase() method is being called.

const mixedcase = "Hello World";
const lowerCase = mixedcase.toLowerCase();
console.log("lowerCase ", lowerCase);
const upperCase = mixedcase.toUpperCase();
console.log("upperCase ", upperCase);

// Searching for Substring
// silce() method is used to get substringof a string.
// It takes 2 arguments i.e, the start index and the end index.
const variable = "helloWorld";
const hello = variable.slice(0, 3);
console.log("hello ", hello);

const world = variable.slice(2, 10);
console.log("world ", world);

// Split a string
// using the splict() method 
