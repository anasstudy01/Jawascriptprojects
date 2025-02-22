// Step 1: Get the input element and all button elements
let input = document.getElementById("display-screen");
let buttons = document.querySelectorAll("button");

// Step 2: Initialize an empty string to store the input values
let string = "";

// Step 3: Convert the NodeList of buttons to an array
let arr = Array.from(buttons);

// Step 4: Iterate over each button and add an event listener
arr.forEach((button) => {
  // Step 5: Add an event listener to each button
  button.addEventListener("click", (e) => {
    // Step 6: Check if the clicked button is the "=" button
    if (e.target.innerText == "=") {
      // Step 7: Evaluate the input string as a mathematical expression
      string = eval(string);
      // Step 8: Update the input element with the result
      input.value = string;
    }
    // Step 9: Check if the clicked button is the "Ac" button
    else if (e.target.innerHTML == "Ac") {
      // Step 10: Reset the input string to "0"
      string = "0";
      // Step 11: Update the input element with the reset value
      input.value = string;
    }
    // Step 12: Check if the clicked button is the "Del" button
    else if (e.target.innerHTML == "Del") {
      // Step 13: Remove the last character from the input string
      string = string.slice(0, -1);
      // Step 14: Update the input element with the updated string
      input.value = string;
    }
    // Step 15: If the clicked button is not "=" or "Ac" or "Del", append its value to the input string
    else {
      // Step 16: Append the button's value to the input string
      string += e.target.innerHTML;
      // Step 17: Update the input element with the updated string
      input.value = string;
    }
  });
});