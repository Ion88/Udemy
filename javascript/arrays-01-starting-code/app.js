// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const analyticsData = [
//   [1, 2, 3],
//   [6, 5, 4],
//   [-2, 3.3, 17],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ["Sport", "Cooking"];
// hobbies.push("Coding");
// console.log(hobbies);

// //add elements at the beginning of the array
// hobbies.unshift("Reading");
// console.log(hobbies);

// //delete last element of the array
// hobbies.pop();
// console.log(hobbies);

// //delete first element
// hobbies.shift();
// console.log(hobbies);

// //replace element at index
// hobbies[1] = "Running";
// console.log(hobbies);

// // add elements between
// hobbies.splice(1, 0, "Reading");
// console.log(hobbies);

// // delete on index element
// hobbies.splice(0, 1); // 0 - index, 1 - number of elements to delete
// console.log(hobbies);

// // delete the last element
// hobbies.splice(-1, 1);
// console.log(hobbies);

// const testResults = [5, 5.4, 33.99, -23, 33.99, 10];
// //const storedResults = testResults.slice(1, 3); // select ranges
// const storedResults = testResults.concat([2.22, -15]); //combine array with existing array

// testResults.push(5.43);
// console.log(storedResults, testResults);
// console.log(testResults.indexOf(33.99)); // returns index
// console.log(testResults.lastIndexOf(33.99)); // searching from the right

// console.log(testResults.includes(33.99)); // returns true or false

// const personData = [{ name: "Ion" }, { name: "Petya" }];
// console.log(personData.indexOf({ name: "Ion" })); // returns -1 because it can't find anything
// // indexOf will not work with objects

// // find objects in the array
// const ion = personData.find((person, index, persons) => {
//   return (person.name = "Ion");
// });

// console.log(ion);

// // returns the index of the object
// const petyaIndex = personData.findIndex((person, index, persons) => {
//   return (person.name = "Petya");
// });
// console.log(petyaIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// // alternative to for of loop (it can add indexes)
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// // transforms array in object by creating a new array
// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// //console.log(prices, taxAdjustedPrices);

// // it sorts a string
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);
// console.log(sortedPrices.reverse());

// // //filter
// // const filteredArray = prices.filter((price, index, prices) => {
// //   return price > 6;
// // });
// // console.log(filteredArray);

// // shorten arrow funtion
// const filteredArray = prices.filter((price) => price > 6);
// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //   sum += price;
// // });
// // console.log(sum);

// // reduce
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);
// console.log(sum);

// const data = "New York;10.99;2000";
// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Ion", "Vizitiu"];
// const names = nameFragments.join(" ");
// console.log(names);

// // spread operator (creates a copy of values)
// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "Ion", age: 32 },
//   { name: "Petya", age: 28 },
// ];
// const copiedPersons = [...persons];
// persons.push({ name: "Pasha", age: 33 });
// persons[0].age = 33;

// console.log(persons, copiedPersons);

// array destructuring
const nameData = ["Ion", "Vizitiu", "Mr", 32];
// const firstName = nameData[0]
// const lastName = nameData[1]

const [firstName, lastName, ...remainData] = nameData;
console.log(firstName, lastName, remainData);
