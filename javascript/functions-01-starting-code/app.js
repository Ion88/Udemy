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

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const DEFAULT_USER_SELECTION = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_SELECTION} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_SELECTION) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is started...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_SELECTION
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game
// rest operator ...numbers
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// // alternative
// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     //don't use that
//     sum -= num;
//   }
//   return resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  2,
  "sdd",
  5,
  -8,
  14
);
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  3,
  5,
  1,
  3,
  15,
  16,
  8,
  10
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is: "),
  "SUBTRACT",
  1,
  4,
  6,
  8,
  12,
  35
);
