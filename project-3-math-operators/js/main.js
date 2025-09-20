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
