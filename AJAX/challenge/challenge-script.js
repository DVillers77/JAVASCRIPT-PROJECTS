// Function is called when the button is clicked
function loadNewContent() {
  // 1. Get the element we need to replace
  const targetElement = document.getElementById("old-content");

  // Use an async/await function for clean, modern AJAX
  async function fetchContent() {
    try {
      // STEP 1: Use fetch() to request the new-content.html file
      const response = await fetch("new-content.html");

      // CRITICAL: Check for server errors (404, 500, etc.)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // STEP 2: Extract the text/HTML content from the response
      const newContent = await response.text();

      // STEP 3: Replace the original paragraph's content
      targetElement.innerHTML = newContent;
    } catch (error) {
      // Handle any network failures or errors during fetch
      console.error("AJAX Challenge Failed:", error);
      targetElement.innerHTML = `<p style="color: red;">Error: Failed to load content. Check the console for details.</p>`;
    }
  }

  // Execute the async function
  fetchContent();
}
