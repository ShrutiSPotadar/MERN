//Variables and Data Types
// There are 3 types of variables in javascript-

// 1. var - Variables declared by var are available throughout the function in which they're declared.

// 2. let - Variables declared by let are only available inside the block where they're defined.

// 3. const - const variables can neither be updated nor re-declared.

// Rules to declare variables
// 1. Do not use any keyword(var,let,const) as a variable name.

// 2. variable name shouls start with a letter.

// 3. Names are case sensitive.

// 4. Can only use _ and $ symbol while naming a variable.

var _name = "hello world";
console.log(_name);

// updating the variable
_name = "Hello";
console.log(_name);

//String
//It is a data type used to represent Text.

const str = "Hello World";
console.log(str);

//There are 3 ways to reperesent string
// 1. Single quote
// 2. Double quote
// 3. Backtick

const singleQuote = "Hello";
const doubleQuote = "shruti";
const backTicek = `Hello ${doubleQuote}`; //'${}' this is called a template literal.
console.log(singleQuote);
console.log(doubleQuote);
console.log(backTicek);

//Boolean - True / False
const age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//Numbers - Integers,fractions
const a = 1;
const b = 2;
const c = a + b;
console.log(c);

//Null and Undefined

//The null value represent the intentional absence of the object value.
const name = null;
console.log(name);

// when you don't assign any value to the variable then it becomes undefined.
let d;
console.log(d);

//Object

//An object is a collection of properties,and a property is an association btween key and value.A property's value can be a function, in which case the property is known as method.
const person = {
  name: "Shruti",
  age: 23,
};
console.log(typeof person); //object

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof arr);

//date is an object

const date = new Date();
console.log(typeof date); //object
