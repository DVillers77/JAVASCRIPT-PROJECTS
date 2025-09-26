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

// DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT

function array_Function() {
  // Defines an array of cat pictures.
  var Cat_Picture = [];
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[2] = "eating";
  Cat_Picture[3] = "purring";
  // Sets the inner HTML of the element with the id "Array" to a sentence
  // that uses the value at index 2 of the Cat_Picture array.
  document.getElementById("Array").innerHTML =
    "In this picture, the cat is " + Cat_Picture[2] + ".";
}

// LET and Const Assignments

// This function demonstrates the use of a 'const' variable for a fixed timestamp.
// The value of the variable will not be reassigned.
function useConstDate() {
  // Declares a constant to capture the current date and time.
  const loginTime = new Date();

  // Displays the fixed timestamp in its own paragraph element.
  document.getElementById("const-date-output").innerHTML =
    "User session started at: " + loginTime;
}

// This function demonstrates the use of a 'let' variable for an updating timestamp.
// The value of the variable will be reassigned.
function useLetDate() {
  // Declares a 'let' variable for the time that can be updated.
  let currentTime = new Date();

  // Displays the initial timestamp.
  document.getElementById("let-date-output").innerHTML =
    "Current time: " + currentTime;

  // Use setTimeout to reassign and update the variable after a delay.
  setTimeout(function () {
    currentTime = new Date();
    // Displays the updated timestamp in its own paragraph element.
    document.getElementById("let-date-output").innerHTML =
      "Time updated to: " + currentTime;
  }, 2000); // Wait for 2 seconds to show the change.
}

// RETURN STATEMENT CHALLENGE

// This function adds two numbers and returns the sum.
function addNumbers(a, b) {
  return a + b;
}

// This function calls addNumbers() and displays the returned value.
function returnExample() {
  let result = addNumbers(5, 7);
  document.getElementById("return-output").innerHTML = "The sum is: " + result;
}

// OBJECT ASSIGNMENT

// Creates a car object with properties and a method.
let car = {
  make: "Dodge",
  model: "Viper",
  year: 2021,
  color: "red",
  // This is a method that returns a string describing the car.
  description: function () {
    return (
      "The car is a " +
      this.year +
      " " +
      this.color +
      " " +
      this.make +
      " " +
      this.model
    );
  },
};

// This function calls the car object's method and displays the result.
function Car_Function() {
  document.getElementById("Car_Object").innerHTML = car.description();
}
