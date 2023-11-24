// Arrays Introduction
let months = ["January", "February", "March", "April"];

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

// Array Push - Adds a new element containing
// the enetered value to the end of the array
months.push("May");
console.log(months);

// Array Pop - Deletes the last element of an array
months.pop();
console.log(months);

// Array Shift - deletes the first element of the array
months.shift();
console.log(months);

// Array Unshift - adds the new value to the start of the array
months.unshift("Samarth");
console.log(months);

// Array Splice - It adds or removes values in any position of an array
months.splice(2, 0, "Shruti", "Ayushi");
console.log(months);

// Array Slice - Copies certain part of an array into a newly created array
const noOneLikesSam = months.slice(1);
console.log(noOneLikesSam);

// Array Map
const inventory = [
  { price: 7, name: "egg" },
  { price: 10, name: "lays" },
  { price: 12, name: "maggie" },
];

const prices = inventory.map((item) => console.log(item.price)); // displays only the prices
const names = inventory.map((item) => console.log(item.name)); // diplays only the names

// Array Filter
const numbers = [2, 5, -2, 0, 7, 6];

const positiveNumbers = numbers.filter((number) => number >= 0);
console.log(positiveNumbers);

// For Each
// We can use for each method when we want to do something with each element of array.
// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((value, i) => console.log((value, i)));

// Array Find
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = num.find((num) => num > 5);
console.log(value); //6

// Array Includes
const fruits = ["Mango", "Apple", "Berry", "Peach"];
if (fruits.includes("Mango")) {
  console.log("It's Mango");
} else {
  console.log("Not Mango");
}

// Array Sort
// Array sort => Alphabetically,
// doesn't sort numbers
// This sort method mutates the original array
const name = ["Shubham", "Shruti", "Rohan", "Aditya"];
name.sort();
console.log(name);

const digits = [4, 5, 6, 7, 2, 1];
digits.sort((a, b) => a - b);
console.log(digits);

const digits1 = [4, 7, 5, 6, 2, 1];
digits1.sort((a, b) => b - a);
console.log(digits1);
