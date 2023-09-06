const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';
let isGameRunning = false;

const startGameBtn = document.getElementById('start-game-btn');

//function expression
// const start = function() {
//   console.log('Game is starting...');
// };

//greet is a method here since it is defined inside an object.
// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();
// console.dir(startGame);

const getPlayerSelection = function() {
  const selection = prompt(`Choose ${ROCK}, ${PAPER}, or ${SCISSORS}...`,'').toUpperCase();
  if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Input. We choose ${DEFAULT_PLAYER_CHOICE} for you!`);
    return;
  }
  return selection;
}

const getComputerSelection = function() {
  const selection = Math.random();
  if(selection < 0.34) {
    return ROCK;
  } else if (selection < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

const getWinner = function (cChoice, pChoice = DEFAULT_PLAYER_CHOICE) {
  if(cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice===ROCK && pChoice===PAPER ||
      cChoice===PAPER && pChoice===SCISSORS ||
      cChoice===SCISSORS && pChoice===ROCK) {
        return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
}

//the function passed here to the addEventListener as an argument is a callback function
startGameBtn.addEventListener('click', function() {
  if(isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerSelection();
  const  winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection ? playerSelection : DEFAULT_PLAYER_CHOICE}, computer picked ${computerSelection}. Therefore, you `;
  if(winner === RESULT_DRAW) {
    message += 'had a draw!';
  } else if(winner === RESULT_PLAYER_WINS) {
    message = message + 'won!';
  } else {
    message = message + 'lost!';
  }
  alert(message);
  isGameRunning = false;
});

//not related to game
//REST Operator
const sumUp = (resultHander, ...numbers) => {
  //function inside a function
  const validateNum = (number) => {
    return isNaN(number) ? 0: number;
  }
  let sum=0;
  for(const num of numbers) {
    sum += validateNum(num);
  }
  resultHander(sum);
}

//callback function
const showResult = (result) => {
  alert('The result after adding up all the numbers is: ' + result);
};

sumUp(showResult, 1,10,'yiyu',13,6);
sumUp(showResult, 1,10,5,13,6,-13,24);

//ES5 arguments keyword
const subtractUp = function() {
  let sum=0;
  for(const num of arguments) {
    sum -= num;
  }
  return sum;
}

console.log(subtractUp(1,4,-6,3,9,-7));