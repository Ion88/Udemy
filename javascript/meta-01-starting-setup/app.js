// Lybrary land
const uid = Symbol();
console.log(uid);

const user = {
  //id: "p1",
  [uid]: "p1",
  name: "Ion",
  age: 32,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

// app land => Using the library

user.id = "p2"; // this should not be possible

console.log(user.toString());
console.log(user[Symbol()]);
console.log(Symbol() === Symbol());

const company = {
  // curEmployee: 0,
  employees: ["Ion", "Petya", "Goose"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }

  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false,
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  // getEmployee: function* employeeGenerator() {
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();
    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployees = 0;
    while (currentEmployees < this.employees.length) {
      yield this.employees[currentEmployees];
      currentEmployees++;
    }
  },
};

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// ----

const course = {
  title: "JavaScript - The Complete Guide",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

//Reflect.deleteProperty(course, "title");

console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    if ((propertyName = "rating")) {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
