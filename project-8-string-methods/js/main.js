// CONCAT() METHOD ASSIGNMENT

// This function combines three separate strings into a single greeting.
function greetingOne() {
  // `const` is used for variables that will not be reassigned.
  const welcome = "Welcome, ";
  // `let` is used for a variable that might change, like a user's name.
  let user = "UserName ";
  // `const` is used again for a static part of the greeting.
  const school = "to The Tech Academy.";
  // The `concat()` method joins `welcome` with `user` and `school`
  // and stores the complete string in `entireGreetingOne`.
  let entireGreetingOne = welcome.concat(user, school);
  // This line finds the HTML element with the id "greeting-one"
  // and sets its content to the final concatenated string.
  document.getElementById("greeting-one").innerHTML = entireGreetingOne;
}

// SLICE() METHOD ASSIGNMENT

// This function uses the `slice()` method to extract a specific part of a string.
function sphincter() {
  // A string variable is declared to hold the full sentence.
  const joke = "Sphincter says, what? ";
  // The `slice()` method extracts a section of the `joke` string.
  // The arguments (-6, -1) tell the method to start at the 6th character from the end
  // and end at the 1st character from the end (the '?' is at index -1, which is not included).
  const answer = joke.slice(-6, -1);
  // This line finds the HTML element with the id "what"
  // and sets its content to the extracted string, which is "what".
  document.getElementById("what").innerHTML = answer;
}

// MORE METHODS CHALLENGES

// toUpperCase() Method

// This function converts a string to all uppercase letters.
function angry() {
  // A string variable is declared.
  const dontYell = "Don't yell at me!";
  // The `toUpperCase()` method is called on the string to create a new one in all caps.
  const shout = dontYell.toUpperCase();
  // This line finds the HTML element with the id "yell" and displays the new string.
  document.getElementById("yell").innerHTML = shout;
}

// search() Method

// This function finds the starting position (index) of a specific word within a string.
function string() {
  // A string variable is declared to hold the full sentence.
  const number = "What index is number at in this string?";
  // The `search()` method is called to find the first occurrence of "number".
  // It returns the index where the word starts.
  const numberIndex = number.search("number");
  // This line finds the HTML element with the id "numberSearch" and displays the index number.
  document.getElementById("numberSearch").innerHTML = numberIndex;
}

// NUMBER METHODS ASSIGNMENT

// toString() Method

function numberToString() {
  const myNumber = 12345; // This is a number
  // toString() method to convert the number to a string
  const myString = myNumber.toString();
  // The result will be the string "12345"
  document.getElementById("number-to-string").innerHTML = myString;
}

// toPrecision() Method

function toPrecisionFunction() {
  // A number with many decimal places
  const myNumber = 12938.3013012938;
  // The toPrecision() method formats the number to a specified length
  // In this case, it will be 10 digits
  const preciseNumber = myNumber.toPrecision(10);
  // Display the result
  document.getElementById("precision-result").innerHTML = preciseNumber;
}

// toFixed() Method

function round() {
  const longNumber = 10.4955;
  // The toFixed() method rounds the number to a specified number of decimal places (2).
  // It returns a string, so convertedNumber will be "10.50".
  let convertedNumber = longNumber.toFixed(2);
  document.getElementById("round-number").innerHTML = convertedNumber;
}

// valueOf() Method and then some

function primitive() {
  // Creates a Date object representing the current date and time.
  let today = new Date();
  // The valueOf() method returns the primitive numeric value of the Date object,
  // which is the number of milliseconds since January 1, 1970.
  let convertValue = today.valueOf();
  document.getElementById("value").innerHTML = convertValue;
  // The toString() method returns a human-readable string representation of the Date.
  let convertString = today.toString();
  document.getElementById("string-value").innerHTML = convertString;
}
