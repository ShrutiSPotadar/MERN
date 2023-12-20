// New Keyword
// It creates an object of num which then let us access to various methods, link toFIxed() in the below code.
const num = new Number(1, 2);
console.log(num.toFixed(0));

// this Keyword
// “This” keyword refers to an object that is executing the current piece of code.
// It references the object that is executing the current function.
const person = {
  name: "John",
  getName() {
    console.log(this);
  },
};

// person.getName();

// class
// It is a schema that can save many values.

class person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new person1("shruti", 23);
console.log(user);

// Using arrow function
const person2 = (name, age, isWorking) => ({ name, age, isWorking });
const user1 = person2("Shruti", 23, true);
console.log("user1 ", user1);
