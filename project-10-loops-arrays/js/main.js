// This function contains a while loop that will count to 10.
function Call_Loop() {
  // Declare an empty string variable to hold the output.
  var digit = "";
  // Initialize a counter variable.
  var X = 1;
  // Start the while loop. The loop will continue as long as X is less than 11.
  while (X < 11) {
    // Append a line break and the current value of X to the digit string.
    digit += "<br>" + X;
    // Increment the value of X by one. This is crucial to prevent an infinite loop.
    X++;
  }
  // Get the HTML element with the id "Loop" and update its content with the final string.
  document.getElementById("Loop").innerHTML = digit;
}

// Define a string variable
let myString = "This is a test string.";

// Get the HTML elements to display the output
let stringElement = document.getElementById("string-output");
let lengthElement = document.getElementById("length-output");

// Display the string itself
stringElement.innerHTML = "The string is: " + myString;

// Display the length of the string using the .length property
lengthElement.innerHTML = "The length of the string is: " + myString.length;
