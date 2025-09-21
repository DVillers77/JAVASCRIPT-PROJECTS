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
