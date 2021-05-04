const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

console.log(randomNumber);
if (randomNumber > 0.7) {
  alert(`${randomNumber} is greater than 0.7`);
}

let arrayNumbers = ["unu", "doi", "trei", "patru", "cinci", "sase"];

// first way itteration, this will show 1,2,3,4,5,6
for (let n = 0; n < arrayNumbers.length; n++) {
  console.log("crescator", n);
}

// for loop backwards, this will show strings
for (let j = arrayNumbers.length - 1; j >= 0; j--) {
  console.log("descrescator", arrayNumbers[j]);
}

// second way
// for (const logNumbers of arrayNumbers) {
//   console.log("second way", logNumbers);
// }

// third way
let counter = 0;
while (counter < arrayNumbers.length) {
  console.log(arrayNumbers[counter]);
  counter++;
}

const randomNumber2 = Math.random();
console.log(randomNumber, randomNumber2);

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("Both greater than 0.7 or smaller than 0.2");
}
