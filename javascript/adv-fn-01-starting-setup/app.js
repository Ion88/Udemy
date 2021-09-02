// Pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(1, 12));

// Impure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(4));

// Side effect function
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["Sport", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBIE");
  console.log(h);
}
printHobbies(hobbies);

// Factory function
let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calcutateTax(amount) {
    console.log(multiplier);
    return tax * amount * multiplier;
  }
  return calcutateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// Practice Closures
let userName = "Ion";

function greetUser() {
  //   let name = "Anna";
  console.log("Hi " + name);
}

let name = "Max";

userName = "Petya";

greetUser();

// Recursion

// function powerOf(x, n) {
//   let result = 1;

//   for (i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  //   if (n === 1) {
  //     return x;
  //   }
  //   return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2*2*2

const myself = {
  name: "Ion",
  friends: [
    {
      name: "Petya",
      friends: [
        {
          name: "Ciola",
          friends: [
            {
              name: "Serinkii",
            },
            {
              name: "Pashkedrol",
            },
          ],
        },
      ],
    },
    {
      name: "Goose",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}

console.log(getFriendNames(myself));
