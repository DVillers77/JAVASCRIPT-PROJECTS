// This function will execute when the HTML document is fully loaded.
function showMessage() {
  // Find the HTML element with the ID "message" and set its content.
  document.getElementById("message").innerHTML =
    "The page has finished loading, and this message is displayed by JavaScript!";
}

// Call the function to display the message.
showMessage();
