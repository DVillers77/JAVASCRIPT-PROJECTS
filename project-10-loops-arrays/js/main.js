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

// CONST KEYWORD ASSIGNMENT

/* This function demonstrates the use of the 'const' keyword and string concatenation.
 * It is called by the 'onclick' event of a button in the HTML file. */
function constant_Function() {
  // Part 1: Initial creation and display of the constant object.
  const Musical_Instrument = {
    type: "guitar",
    brand: "Fender",
    color: "black",
  };

  /* The following line uses string concatenation to build a sentence from multiple parts.
   * The plus signs (+) join the strings together.
   * The white space inside the quotation marks (" ") is a space character,
   * which is added to prevent the words from running together. */
  document.getElementById("Constant").innerHTML =
    "The instrument is a " +
    Musical_Instrument.brand +
    " " +
    Musical_Instrument.type +
    " with a " +
    Musical_Instrument.color +
    " color.";

  // Part 2: Modifying properties of the constant object.
  // A constant's properties can be changed, but the object itself cannot be reassigned.
  Musical_Instrument.color = "blue";
  Musical_Instrument.price = "$900"; // This line adds a new property to the object.

  /* This 'setTimeout' function creates a delay. It then updates the HTML with a new sentence.
   * Here, we use a period (".") inside the quotes, which is a literal character that acts
   * as punctuation at the end of the sentence. */
  setTimeout(function () {
    document.getElementById("Constant").innerHTML =
      "The " +
      Musical_Instrument.color +
      " " +
      Musical_Instrument.type +
      " costs " +
      Musical_Instrument.price +
      ".";
  }, 2000); // 2000 milliseconds = 2-second delay.
}
