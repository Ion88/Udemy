const age = [29, 33, 16];

// [29, 33, 16] => [29, 33, 16, _]
// [0 , 1 , 2 ] => [0 , 1 , 2 , 3]
age.push(60); // Constant Time Complexity: O(1)

// [29, 33, 16] => [_, 29, 33, 16]
// [0 , 1 , 2 ] => [0 , 1 , 2 , 3]
age.unshift(10); // Linear Time Complexity: O(n)

const myAge = age[1]; // => Constant Time Complexity: O(n)

// --------

const namePopularity = [
  { userName: "Ion", usages: 5 },
  { userName: "Laba", usages: 6 },
];

const labaUsages = namePopularity.find((pers) => pers.userName === "Laba")
  .usages;
// BEST CASE: Constant Time Complexity: O(1)
// WORST CASE: Linear Time Complexity: O(n)
// AVERAGE CASE: Linear Time Complexity: O(n)

const nameMap = {
  Ion: 5,
  Laba: 6,
};

const labaUsages2 = nameMap["Laba"]; // Constant Time Complexity: O(1)
