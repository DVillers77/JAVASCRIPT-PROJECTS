// GLOBAL VARIABLE ASSIGNMENT
// This variable is declared outside any function, so it has global scope.
var myGlobalVariable = "This is a global variable.";

// This function can access the global variable and display it.
function accessGlobalVariable() {
  document.getElementById("global-scope").innerHTML = myGlobalVariable;
}

// LOCAL VARIABLE AND DEBUGGING ASSIGNMENT
// This function contains a local variable.
function createLocalVariable() {
  // This variable is declared inside the function, so it has local scope.
  var myLocalVariable = "This is a local variable.";
  console.log(myLocalVariable);
}

// LOCAL AND GLOBAL VARIABLE ASSIGNMENT

// This function intentionally has an error.
// It tries to access the local variable from the function above, which is not possible.

// The below code caused an error and is turned into a comment to bypass said error.

/*
 function debugScopeError() {
  // This will cause a ReferenceError because myLocalVariable is not defined in this function's scope.
  console.log(myLocalVariable);
} 
*/

// Call the functions to demonstrate the concepts.
accessGlobalVariable();
createLocalVariable();
// Call the function that will cause the error.
debugScopeError();

// METHOD ASSIGNMENT

// This is the main function that gets called when the user clicks.
function displayGreeting() {
  // Get the current hour from the system.
  const hour = new Date().getHours();

  // Check if the hour is less than 18 (6:00 PM).
  if (hour < 18) {
    // This code will only run if the condition is true.
    document.getElementById("greeting-display").innerHTML =
      "How are you today?";
  }
}

// IF STATEMENT ASSIGNMENT

/*
This function checks if the current date is before a specific date.
It's used to determine if a sale is still active.
*/
function saleOne() {
  // Create a new Date object representing today's date and time.
  const today = new Date();

  // Create another Date object for the end of the sale, using the format "YYYY-MM-DD".
  const saleEnds = new Date("2025-09-25");

  // An if statement checks if today's date is less than the sale end date.
  if (today < saleEnds) {
    // If the condition is true, the sale is still on.
    document.getElementById("sale-ends").innerHTML = "Sale is on!";
  }
}

// ELSE ASSIGNMENT

/*
This function checks if the current date is before a specific date.
It's used to determine if a sale is still active.
*/
function saleTwo() {
  // Create a new Date object representing today's date and time.
  const today = new Date();

  // Create another Date object for the end of the sale, using the format "YYYY-MM-DD".
  const saleEnds = new Date("2025-09-22");

  // An if statement checks if today's date is less than the sale end date.
  if (today < saleEnds) {
    // If the condition is true, the sale is still on.
    document.getElementById("sale-2-ends").innerHTML = "Sale is on!";
  } else {
    // If the condition is false, the sale has ended.
    document.getElementById("sale-2-ends").innerHTML = "Regular Price";
  }
}

// ELSE IF STATEMENTS

function timeFunction() {
  // Get the current hour from the user's computer.
  let time = new Date().getHours();
  let reply;

  // The 'if' statement checks for morning hours (1 AM to 11 AM).
  if (time < 12 && time > 0) {
    reply = "It is morning time.";
  }
  // The 'else if' statement checks for afternoon hours (12 PM to 5 PM).
  // The '&&' (AND) operator ensures both conditions are true.
  else if (time >= 12 && time < 18) {
    reply = "It is afternoon.";
  }
  // The 'else' statement catches all other cases, which would be evening hours (6 PM to 12 AM).
  else {
    reply = "It is evening time.";
  }

  // This line writes the final message to the HTML page.
  document.getElementById("time-of-day").innerHTML = reply;
}
