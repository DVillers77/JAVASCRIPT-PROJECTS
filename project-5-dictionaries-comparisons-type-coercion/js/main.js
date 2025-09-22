// TYPE OF OPERATOR ASSIGNMENT

// This is a set of instructions that we can run. We've named this set of instructions "coercoin_type_of".
function coercoin_type_of() {
  // This line creates a container, a variable named "mixedNumbers".
  // It puts the result of adding the string "10" and the number 5 into this container.
  // JavaScript sees the string "10" and automatically changes the number 5 into a string "5".
  // It then joins them together to create a new string, "105".
  let mixedNumbers = "10" + 5;

  // This line looks for a specific spot on the webpage that has the unique ID "coercoin".
  // The .innerHTML part means we are going to change the text inside that spot.
  // The `typeof` operator checks what kind of data is stored in our container "mixedNumbers".
  // Even though it looks like a number, the `+` operator with a string made it a string.
  // So, this line will find the spot on the page and display the word "string".
  document.getElementById("coercoin-type").innerHTML = typeof mixedNumbers;
}

// TYPE COERCION ASSIGNMENT

// This function, named "coercoin_assignment", is different from the first one.
// The first function used the `typeof` operator to tell us what kind of data we had.
// This function will show us the actual result of the operation.
function coercoin_assignment() {
  // This line is the same as before. It adds the string "10" and the number 5.
  // JavaScript automatically turns the number 5 into a string "5" and joins them together.
  // The value of "mixedNumbers" is now the string "105".
  let mixedNumbers = "10" + 5;

  // This line looks for a specific spot on the webpage with the ID "coercoin-action".
  // The `+` sign in front of `mixedNumbers` is a special operator.
  // It forces JavaScript to convert the string "105" back into a number, which is 105.
  // This is a different kind of type coercion.
  // The .innerHTML part then changes the text in that spot to display the number 105.
  document.getElementById("coercoin-action").innerHTML = +mixedNumbers;
}

// NAN CHALLENGE

// The "Nan()" function demonstrates how to get a "NaN" (Not a Number) result.
function Nan() {
  // This line looks for the HTML element with the ID "NaN-test" and sets its text.
  // The expression "0 / 0" is an impossible mathematical operation.
  // In JavaScript, this operation does not cause an error; it returns "NaN", which stands for "Not a Number".
  document.getElementById("NaN-test").innerHTML = 0 / 0;
}

// The "Infinity8()" function demonstrates how the "isNaN()" function works.
function Infinity8() {
  // This line looks for the HTML element with the ID "Infinty-test" and sets its text.
  // The `isNaN()` function checks if a value is "Not a Number".
  // We are checking the string "This is a string".
  // Since a string of letters is not a number, the function returns "true", which is displayed on the webpage.
  document.getElementById("Infinty-test").innerHTML = isNaN("This is a string");
}

// The "neg_Infinity8()" function also uses the "isNaN()" function.
function neg_Infinity8() {
  // This line looks for the HTML element with the ID "-Infinity-test" and sets its text.
  // We are checking the string "007".
  // Even though it's inside quotes, JavaScript recognizes that the string contains only digits and can be converted to a number.
  // Since "007" can be treated as a number, the `isNaN()` function returns "false", which is displayed on the webpage.
  document.getElementById("-Infinity-test").innerHTML = isNaN("007");
}

// INFINITY ASSIGNMENT

// This function, named "display_infinity", demonstrates how to display "Infinity".
function display_infinity() {
  // This line looks for the HTML element with the ID "display-infinity".
  // We are giving it a very large number, written in scientific notation.
  // The "e310" means we are multiplying 2 by 10 to the power of 310.
  // This number is larger than JavaScript can store, so it returns "Infinity".
  document.getElementById("display-infinity").innerHTML = 2e310;
}

// This function, named "display_Neg_infinity", demonstrates how to display "-Infinity".
function display_Neg_infinity() {
  // This line looks for the HTML element with the ID "display-neg-infinity".
  // We are giving it a very large negative number, written in scientific notation.
  // This number is smaller than JavaScript can store, so it returns "-Infinity".
  document.getElementById("display-neg-infinity").innerHTML = -3e310;
}

// BOOLEAN ASSIGNMENT

// This function, named "b_True", demonstrates how to display "true" using a comparison.
function b_True() {
  // This line looks for the HTML element with the ID "b-true".
  // The expression "2 > 1" asks if 2 is greater than 1. Since this is true, the function returns "true".
  document.getElementById("b-true").innerHTML = 2 > 1;
}

// This function, named "b_False", demonstrates how to display "false" using a comparison.
function b_False() {
  // This line looks for the HTML element with the ID "b-false".
  // The expression "1 > 2" asks if 1 is greater than 2. Since this is false, the function returns "false".
  document.getElementById("b-false").innerHTML = 1 > 2;
}

// CONSOLE.LOG ASSIGNMENT

// This function, named "console_Log", demonstrates how to use the console.log() method.
function console_Log() {
  /* This line performs the addition 10 + 5 and displays the result directly in the browser's developer console, not on the webpage. */
  console.log(10 + 5);
}

// BOOLEAN CHALLENGE

// This function, named "f_Console_log", demonstrates how to display "false" using a comparison inside a console.log() method.
function f_Console_log() {
  /* This line performs the comparison "2 > 3" and displays the result directly in the browser's developer console, not on the webpage. Since 2 is not greater than 3, the result is "false". */
  console.log(2 > 3);
}
