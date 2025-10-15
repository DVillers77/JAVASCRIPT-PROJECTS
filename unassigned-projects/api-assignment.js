// Replacement API endpoint for Random Useless Facts
const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

/**
 * Fetches a random fact from the API and displays it on the page.
 */
function fetchRandomFact() {
  const outputElement = document.getElementById("fact-output");
  outputElement.textContent = "Loading fact..."; // Provide immediate user feedback

  // 1. Initiate the fetch request to the API
  fetch(API_URL)
    // 2. Handle the response (convert the raw HTTP response to JSON format)
    .then((response) => {
      if (!response.ok) {
        // Throw an error if the HTTP status is not 200-299
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    // 3. Process the JSON data
    .then((data) => {
      // The API response contains the fact text in a property called 'text'
      const factText = data.text;
      outputElement.textContent = factText;
    })
    // 4. Handle any errors during the fetch or processing
    .catch((error) => {
      console.error("Fetch error:", error);
      outputElement.textContent =
        "Failed to load fact. Check console for details.";
    });
}

// Dev Note: This function is called directly from the button's onclick attribute in the HTML.
