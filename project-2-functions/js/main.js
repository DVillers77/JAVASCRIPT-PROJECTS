// step 67. Function to display a message in the paragraph element.
function My_First_Function() {
  let firstVar = "This is a new message! ";
  let secondVar = "The function works!";

  // Concatenate the two variables and display the result.
  document.getElementById("h1").innerHTML = firstVar + secondVar;
}
// Step 69 operator assignment
document.getElementById("step").innerHTML += " 67";

/* initially missunderstood the assignment and did the below alert buttons */

// Get references to the two button elements
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

// Add a click event listener to the "Back" button
backButton.addEventListener("click", function () {
  alert("There is no going back!");
});

// Add a click event listener to the "Next" button
nextButton.addEventListener("click", function () {
  alert("You better go back!");
});
