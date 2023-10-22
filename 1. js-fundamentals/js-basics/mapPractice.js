const arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

// arr.map((ele) => {
//   sum = sum + ele;
// });
// console.log(sum);

// arr.map((ele) => {
//   if (ele % 2 == 0) {
//     sum = sum + ele;
//   }
// });

// console.log(sum);

const personData = [
  {
    name: "shubham",
    age: 24,
  },
  {
    name: "kiara",
    age: 2,
  },
  {
    name: "Shruti",
    age: 22,
  },
];

const checkAge = (personData) => {
  personData.map((ele) => {
    if (ele.age >= 18) {
      console.log(ele.name);
    }
  });
};

checkAge(personData);
