// SWITCH STATEMENT ASSIGNMENT

// This function handles the animal input and switch statement logic.
function animalFunction() {
  // 1. We declare a variable to hold the output message. We use 'let' because its value will change.
  let animalOutput;

  // 2. We get the value the user typed into the input field.
  // The .toLowerCase() method is used to make the input case-insensitive.
  // For example, if the user types "Dog", this will change it to "dog".
  let animals = document.getElementById("animal-input").value.toLowerCase();

  // 3. This is the 'switch' statement. It's like a more organized 'if/else if' chain.
  // It checks the value of the 'animals' variable and compares it to each 'case'.
  switch (animals) {
    // 4. Case "dog": If the 'animals' variable is equal to "dog", this code runs.
    case "dog":
      animalOutput = "Dogs are great companions!";
      // 5. The 'break' keyword is essential. It stops the 'switch' statement
      // from checking any other cases once a match is found. Without it,
      // the code would "fall through" and run the next case as well.
      break;

    case "cat":
      animalOutput = "Cats are independent and playful!";
      break;

    case "cow":
      animalOutput = "Cows are important for dairy and farming.";
      break;

    case "goat":
      animalOutput = "Goats are known for being curious and clever!";
      break;

    case "pig":
      animalOutput = "Pigs are highly intelligent animals.";
      break;

    case "sheep":
      animalOutput = "Sheep provide wool and are great for grazing.";
      break;

    // 6. The 'default' case is like the 'else' in an 'if/else' statement.
    // It runs if none of the other cases match.
    default:
      animalOutput =
        "That animal is not on the list. Please choose from the options provided.";
  }

  // 7. Finally, we take the message stored in 'animalOutput' and display it on the web page.
  document.getElementById("output-text").innerHTML = animalOutput;
}

// 8. This part of the code listens for a user action (the 'submit' event).
// It's attached to the form element in the HTML.
document.querySelector("form").addEventListener("submit", function (event) {
  // 9. event.preventDefault() stops the page from reloading when the form is submitted.
  event.preventDefault();

  // 10. We then call the animalFunction() to run the code we just wrote.
  animalFunction();
});
