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
