// Function is called when the submit button is clicked
function get_msg(event) {
  // 1. Prevent the default browser form submission (page refresh)
  event.preventDefault();

  // Get input value of name to display to user after request has been made.
  // The instructor uses 'full name' as the ID in the video.
  const inputVal = document.getElementById("fullName").value;

  // Get the element where the response HTML will be displayed.
  const contentElement = document.getElementById("ajax-content");

  // Clear the content element and show a brief "Loading..." message
  contentElement.innerHTML = "<h2>Loading response...</h2>";

  // Use a modern async/await function to handle the AJAX call
  async function fetchResponse() {
    try {
      // STEP 1 & 2 (Modern): Prepare and send the GET request
      // We use fetch() to retrieve the HTML file.
      const response = await fetch("content.html");

      // Check for a successful HTTP status (e.g., 200 OK)
      if (!response.ok) {
        // If the status is 404, 500, etc., throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // STEP 3 (Modern): Get the raw response content (text/HTML)
      const responseHTML = await response.text();

      // STEP 4 (Modern): Display the content and execute the callback logic

      // 1. Inject the entire HTML structure of response.html into the page.
      contentElement.innerHTML = responseHTML;

      // 2. Perform the Callback logic: Find the target element inside the new content
      const thankYouElement = document.getElementById("TKU_MSG");

      // 3. Construct the message using the user's name
      if (thankYouElement) {
        thankYouElement.innerHTML = `Thank You ${inputVal} for signing up!`;
      }
    } catch (error) {
      // Handle any network or fetch errors (equivalent to XHR readyState failure)
      console.error("AJAX Request Failed:", error);
      contentElement.innerHTML = `<h2 style="color: red;">Error: Could not complete your submission.</h2>`;
    }
  }

  // Execute the async function
  fetchResponse();
}
