// Function to handle the display logic
function displayFact(event) {
  // 1. Get the element that was clicked (the button)
  const button = event.target;

  // The 'dataset' property is used to access the data attributes (data-planet becomes dataset.planet)
  const planetName = button.dataset.planet;
  const planetFact = button.dataset.info;

  // 2. Find the output element
  const outputElement = document.getElementById("fact-output");

  // 3. Update the content using the data retrieved from the HTML
  outputElement.innerHTML = `
        <span style="font-weight: bold;">${planetName}:</span> ${planetFact}
    `;
}

// Select all buttons with the class 'fact-button'
const factButtons = document.querySelectorAll(".fact-button");

// Loop through the NodeList and attach the click listener to each button
factButtons.forEach((button) => {
  button.addEventListener("click", displayFact);
});
