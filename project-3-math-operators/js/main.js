// This is a function, which is like a set of instructions that we can run.
// We've named this function "additionFunction".
function additionFunction() {
  // This is a variable. Think of it as a container that holds a value.
  // We've named this container "result" and we've put the number 15 inside of it (because 10 + 5 equals 15).
  let result = 10 + 5;

  // Now we're going to find an element in our HTML page.
  // We are looking for the element that has the id "math-10-plus-5".
  // The .innerHTML part means we are going to change the text inside that element.
  // We are setting the text to say "The answer is: " followed by the number we stored in our container we named "result" on the line above.
  document.getElementById("math-10-plus-5").innerHTML =
    "The answer is: " + result;
}

function subtractionFunction() {
  let result = 10 - 5;
  document.getElementById("math-10-minus-5").innerHTML =
    "The answer is: " + result;
}

function multiplicationFunction() {
  let result = 10 * 5;
  document.getElementById("math-10-times-5").innerHTML =
    "The answer is: " + result;
}

function divisionFunction() {
  let result = 10 / 5;
  document.getElementById("math-10-divide-5").innerHTML =
    "The answer is: " + result;
}

function additionMultiplicationFunction() {
  let result = 10 + 5 * 2;
  document.getElementById("math-10-plus-10").innerHTML =
    "The answer is: " + result;
}

function remainderFunction() {
  let remainder = 10 % 3;
  document.getElementById("math-remainder-10-divide-3").innerHTML =
    "The answer is: " + remainder;
}

// This line starts a set of instructions. Think of it like a recipe. The name of our recipe is "negationFunction."
function negationFunction() {
  // This line creates a container, and we are calling it negation. We are putting the number 10 inside this container.
  let negation = 10;
  /* This line creates another container and calls it result. We are taking the number from the negation container and flipping its sign to make it negative. So, it changes from 10 to -10. We then put -10 into our result container. */
  let result = -negation;
  /* This line looks for a specific spot on your web page that has the unique ID "math-negation-10". It then changes the text in that spot. It will display the words "The answer is:" followed by whatever number is in our result container, which is -10. */
  document.getElementById("math-negation-10").innerHTML =
    "The answer is: " + result;
}

function incrementFunction() {
  let x = 10;
  x++;
  document.getElementById("math-increment").innerHTML = "The result is: " + x;
}

function decrementFunction() {
  let x = 10;
  x--;
  document.getElementById("math-decrement").innerHTML = "The result is: " + x;
}

function random01Function() {
  let random = Math.random();
  document.getElementById("math-random-01").innerHTML =
    "The result is: " + random;
}

function random0100Function() {
  let random = Math.random() * 100;
  document.getElementById("math-random-0100").innerHTML =
    "The result is: " + random;
}
