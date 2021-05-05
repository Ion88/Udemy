const startGameBtn = document.getElementById("start-game-btn");

//function declaration
// function startGame() {
//   console.log("Game is started...");
// }

// function expression
// const start = function () {
//   console.log("Game is started...");
// };

//method - a function attached to object
// const person = {
//   greet: function () {
//     console.log("Hello there!");
//   },
// };

// person.greet();

// console.log(typeof startGame);
// console.dir(startGame);

startGameBtn.addEventListener("click", function () {
  console.log("Game is started...");
});
