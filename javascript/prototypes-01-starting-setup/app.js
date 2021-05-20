class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Ion";

  constructor() {
    // super();
    this.age = 30;
  }

  //   greet = () => {
  //     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  //   };

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  }
}

// function Person() {
//   this.age = 32;
//   this.name = "Ion";
// }

// Person.prototype.greet = () => {
//   console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// const person2 = new person.__proto__.constructor();
// console.log(person2);

// const p = new Person();
// const p2 = new Person();
// console.log(p.__proto__ === p2.__proto__);
// p.greet();

// const btn = document.getElementById("btn");
// //btn.addEventListener("click", p.greet);
// btn.addEventListener("click", p.greet.bind(p));

const course = {
  //new Object()
  title: "Javascript",
  rating: 5,
};

Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
//console.log(Object.getPrototypeOf(course));
course.printRating();

const student = Object.create(
  {
    prinProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Ion",
      writable: true,
    },
  }
);

//student.name = "Ion";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.prinProgress();

console.log(student);
