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
