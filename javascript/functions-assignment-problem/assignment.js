const sayHello = (name) => console.log("Hi " + name);
const sayHello2 = (greet, name) => console.log(`${greet} ${name}`);
const sayHello3 = () => console.log("Hello everyone!");
const sayHello4 = (name) => "Hi " + name;

sayHello("Ion");
sayHello2("Privet", "Petya");
sayHello3();
console.log(sayHello4("Ion"));

const sayHello5 = (name, greet = "Hi") => console.log(`${greet} ${name}`);

sayHello5("Gamy");
sayHello5("Gamy", "Aloha");

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not empty!");
  },
  "Hello",
  "12",
  "aloha",
  "not"
);
