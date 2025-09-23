// This function, named "rideFunction", checks a rider's height using a ternary operator.
function rideFunction() {
  // We are declaring two variables: "Height" to store the input and "Can_ride" to store the result string.
  var Height, Can_ride;
  // This line gets the value from the HTML input element with the ID "height".
  Height = document.getElementById("height").value;
  // This is the core of the function: the ternary operator.
  // It checks if "Height" is less than 52.
  // If it's true, it assigns the string "You are too short" to the "Can_ride" variable.
  // If it's false, it assigns the string "You are tall enough" to the "Can_ride" variable.
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  // Finally, this line takes the result string from "Can_ride" and adds the text " to ride."
  // It then displays the full message inside the HTML element with the ID "ride".
  document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}

// This function, named "votingAge", checks a user's age using a ternary operator.
function votingAge() {
  // We are declaring two variables: "Age" to store the input and "Can_vote" to store the result string.
  var Age, Can_vote;
  // This line gets the value from the HTML input element with the ID "voting-age".
  Age = document.getElementById("voting-age").value;
  // This is the ternary operator.
  // It checks if "Age" is less than 18.
  // If it's true, it assigns the string "You are too young" to the "Can_vote" variable.
  // If it's false, it assigns the string "You are old enough" to the "Can_vote" variable.
  Can_vote = Age < 18 ? "You are too young" : "You are old enough";
  // This line takes the result string from "Can_vote" and adds the text " to vote.".
  // It then displays the full message inside the HTML element with the ID "age".
  document.getElementById("age").innerHTML = Can_vote + " to vote.";
}
