// for (let i =0;i<=100;i++){
// if (i %2!==0){
//   console.log(i);
// }
// // console.log(odd);


// }



// guess the game 


// Generate a random number between 1 and 100
let gameNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Initialize the maximum number of attempts
let maxAttempts = 10;

// Game loop
while (attempts < maxAttempts) {
  // Prompt the user to guess the number
  let userNumber = prompt(`Guess the number (Attempt ${attempts + 1}/${maxAttempts}):`);

  // Check if the user wants to quit
  if (userNumber === null) {
    console.log("Game over. The number was " + gameNumber);
    break;
  }

  // Validate the user's input
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    console.log("Invalid input. Please enter a number between 1 and 100.");
    continue;
  }

  // Increment the number of attempts
  attempts++;

  // Check if the user's guess is correct
  if (parseInt(userNumber) === gameNumber) {
    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
    break;
  } else if (parseInt(userNumber) < gameNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
}

// Check if the user exceeded the maximum number of attempts
if (attempts === maxAttempts) {
  console.log("Game over. The number was " + gameNumber);
}

