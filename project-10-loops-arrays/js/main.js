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

// Challenge

// Define a string variable
let myString = "This is a test string.";

// Get the HTML elements to display the output
let stringElement = document.getElementById("string-output");
let lengthElement = document.getElementById("length-output");

// Display the string itself
stringElement.innerHTML = "The string is: " + myString;

// Display the length of the string using the .length property
lengthElement.innerHTML = "The length of the string is: " + myString.length;

// FOR LOOP ASSIGNMENT

function for_Loop() {
  // Define an array of musical instruments.
  var Instruments = [
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
  ];
  // Declare an empty string variable to store the loop's output.
  var Content = "";
  // A for loop that iterates through each element in the array.
  for (var i = 0; i < Instruments.length; i++) {
    // Appends the current instrument and a line break to the Content string.
    Content += Instruments[i] + "<br>";
  }
  // Updates the HTML paragraph element with the id "List_of_Instruments" with the Content string.
  document.getElementById("List_of_Instruments").innerHTML = Content;
}
