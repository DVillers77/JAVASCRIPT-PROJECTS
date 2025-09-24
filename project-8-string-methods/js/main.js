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
