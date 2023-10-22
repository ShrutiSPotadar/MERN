//Variables and Functions
let a = 1;
const b = 2;
var c = 3;

//function
function addTwoNum(a, b) {
  //   console.log(a + b);
  return a + b;
}

console.log(addTwoNum(2, 3));

let c = addTwoNum(2, 3);
console.log(c);

const addTwoNum = (a, b) => {
  console.log(a + b);
};

addTwoNum(2, 3);

//Array
const arr = ["mango", "apple", "peach"];
console.log(arr);
arr.push("berry");
console.log(arr);
arr[0] = "grape";
console.log(arr);

const item = ["volvo", "bmw", "mercedes"];
arr = item;

//Array of objects
const personObj = [
  {
    name: "shruti",
    age: 23,
    company: "digit",
  },
  {
    name: "shubham",
    age: 24,
    company: "solana",
  },
  {
    name: "kiara",
    age: 1.5,
    company: "kadamhouse",
  },
];

//using map method
const printNames = (personObj) => {
  personObj.map((ele) => {
    console.log(ele.name);
  });
};

printNames(personObj);

const productObj = [
  {
    name: "ipad",
    cost: 44000,
  },
  {
    name: "samsung",
    cost: 43000,
  },
];

//Arrow function symtax
const functionname = () => {};

const printProduct = (productObj) => {
  productObj.map((e) => {
    // console.log(e.name + " " + "cost around" + " " + e.cost);
    console.log(`${e.name} costs around ${e.cost}`);
  });
};

printProduct(productObj);

//map method without using function
const fruits = [
  {
    name: "apple",
    costs: "100/kg",
    rating: 5,
  },
  {
    name: "orange",
    costs: "143/kg",
    rating: 4.3,
  },
];

fruits.map((fruit) => {
  console.log(fruit.name);
  let cost = 100;
  console.log(cost + fruit.costs);
});
