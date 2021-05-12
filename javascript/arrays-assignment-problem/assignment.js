const numbersArray = [1, 3, 17, 25, 30];

const filteredArray = numbersArray.filter((numbers) => numbers > 5);
console.log(filteredArray);

const mapToObject = numbersArray.map((numbers) => {
  const numObj = { num: numbers };
  return numObj;
});

console.log(mapToObject);

const multiply = numbersArray.reduce((prevValue, curValue) => {
  return prevValue * curValue;
}, 1);
console.log(multiply);

const findMax = (...nums) => {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
};

console.log(findMax(...numbersArray));

const findMinMax = (...nums) => {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
};

const [min, max] = findMinMax(...numbersArray);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
