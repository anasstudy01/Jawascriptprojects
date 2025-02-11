const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberofLines = () => {
  while (true) {
    const lines = prompt("Enter a number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const betAmount = prompt("Enter a bet amount: ");
    const numberBetAmount = parseFloat(betAmount);
    if (
      isNaN(numberBetAmount) ||
      numberBetAmount <= 0 ||
      numberBetAmount > balance / lines
    ) {
      console.log("Invalid bet amount, try again.");
    } else {
      return numberBetAmount;
    }
  }
};

// Define slot machine symbols
const symbols = [
  Symbol("cherry"),
  Symbol("lemon"),
  Symbol("bar"),
  Symbol("seven")
];

// Define payouts for each symbol
const payouts = {
  "cherry": 2,
  "lemon": 3,
  "bar": 5,
  "seven": 10
};

// Function to spin the slot machine
const spin = () => {
  const reels = [];
  for (let i = 0; i < 3; i++) {
    const reel = [];
    for (let j = 0; j < 3; j++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      reel.push(symbols[randomIndex]);
    }
    reels.push(reel);
  }
  return reels;
};

// Function to display the slot machine
const displayReels = (reels) => {
  for (let i = 0; i < reels[0].length; i++) {
    let row = "";
    for (let j = 0; j < reels.length; j++) {
      row += reels[j][i].toString().replace("Symbol(", "").replace(")", "") + " ";
    }
    console.log(row);
  }
};

// Function to calculate winnings
const calculateWinnings = (reels, betAmount, lines) => {
  let winnings = 0;
  for (let i = 0; i < lines; i++) {
    const symbol = reels[0][i];
    let isWinningLine = true;
    for (let j = 1; j < reels.length; j++) {
      if (reels[j][i] !== symbol) {
        isWinningLine = false;
        break;
      }
    }
    if (isWinningLine) {
      const symbolName = symbol.toString().replace("Symbol(", "").replace(")", "");
      winnings += betAmount * payouts[symbolName];
    }
  }
  return winnings;
};

// Main game logic
let balance = deposit();
const numberOfLines = getNumberofLines();
const betAmount = getBet(balance, numberOfLines);

const reels = spin();
displayReels(reels);

const winnings = calculateWinnings(reels, betAmount, numberOfLines);
balance += winnings;

console.log(`You won $${winnings}! Your new balance is $${balance}.`);