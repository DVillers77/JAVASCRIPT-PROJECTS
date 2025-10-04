// SINGLE SOURCE OF TRUTH: Data for all recipes
const allRecipesData = [
  {
    title: "Deep Dish Skillet Pizza",
    id: "featured", // Card ID
    prepTime: "50-60 minutes",
    servings: "6",
    level: "medium",
    // ADDED DESCRIPTION TO JS
    description:
      "Deep dish pizza has got a lot going for it: a thick crust that's tender and chewy on the inside, but nicely crisped on the outside; a little extra room for piling on the toppings; and, deep dish is less needy than its thin crust style counterpart, which requires some care when rolling and stretching. Here, you just push the dough into the skillet and you're cooking. Save the leftovers for lunch!",
  },
  {
    title: "Saucy Tortellone Parm",
    id: "pasta",
    prepTime: "15-20 minutes",
    servings: "2",
    level: "easy",
  },
  {
    title: "Mediterranean Chicken Thighs",
    id: "chicken",
    prepTime: "20-30 minutes",
    servings: "4",
    level: "easy",
  },
  {
    title: "Crispy Pork Katsu and Rice",
    id: "pork",
    prepTime: "25-35 minutes",
    servings: "4",
    level: "hard",
  },
  {
    title: "Cheddar Cheese Biscuits",
    id: "biscuits",
    prepTime: "30-40 minutes",
    servings: "4",
    level: "medium",
  },
  {
    title: "Baked Cod and Scallop Potatoes",
    id: "fish",
    prepTime: "40-50 minutes",
    servings: "4",
    level: "easy",
  },
  {
    title: "S'mores Cake",
    id: "dessert",
    prepTime: "50-60 minutes",
    servings: "4",
    level: "medium",
  },
];

// 💡 NEW GLOBAL VARIABLE: Holds the unique ID of the automatic timer.
let autoCloseTimerId;

// ==============================================================================
//                      --- MODAL LOGIC ---
// ==============================================================================

// Sets up the button that will open the RECIPE MODAL
const btns = document.querySelectorAll(
  "input.modal-btn, button.modal-btn, a.modal-btn"
);

// Get the span element that closes the modal
const closeBtn = document.getElementsByClassName("close-btn");

// When the user clicks the recipe button, open the modal using showModal()
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function (event) {
    // 1. Prevent default navigation behavior (stops scrolling)
    event.preventDefault();

    const modal = document.querySelector(event.target.getAttribute("href"));

    if (modal) {
      // Open the modal
      modal.showModal();

      // Clear any previous timer before starting a new one (safety measure)
      clearTimeout(autoCloseTimerId);

      // --- TIMER MODE 1: Automatic Close (Bad UX, but fulfills challenge) ---
      // This line starts the timer and saves its ID.

      // --- DEV MODE: To disable the automatic closing, comment out the block below. ---

      autoCloseTimerId = setTimeout(() => {
        if (modal.open) {
          modal.close();
        }
      }, 10000); // 10,000 milliseconds = 10 seconds
    }
  };
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function (event) {
    const modalToClose = event.target.closest("dialog");

    if (modalToClose) {
      // Manually close the modal
      modalToClose.close();

      // --- TIMER MODE 2: Cancel Timer on Manual Close (Good UX) ---
      // CRITICAL: We clear the timer so the 10-second close doesn't run *after* the user closes it.
      // DEV MODE: To disable the clearTimeout functionality, comment out the line below.
      clearTimeout(autoCloseTimerId);
    }
  };
}

// =============================================================================
//                  --- NEW JS DATA INJECTION ---
// =============================================================================

function populateRecipeCards() {
  allRecipesData.forEach((recipe) => {
    // This is the HTML block used for BOTH the featured recipe and the flip cards
    const injectedDataHTML = `
        <h4>Prep Time:</h4>
        <p>${recipe.prepTime}</p>
        <h4>Servings:</h4>
        <p>${recipe.servings}</p>
        <h4>Level:</h4>
        <p>${recipe.level}</p>
    `;

    // 1. Logic for the Featured Recipe (Unique Layout)
    if (recipe.id === "featured") {
      const headerElement = document.getElementById("featured-header");
      const dataContainer = document.getElementById("featured-data-container");
      // Select the description element using the class you created
      const descriptionElement = document.querySelector(".main-text");

      if (headerElement) {
        headerElement.textContent = recipe.title;
      }

      if (dataContainer) {
        // Inject the H4/P data block
        dataContainer.innerHTML = injectedDataHTML;
      }

      // Inject the description text
      if (descriptionElement) {
        descriptionElement.textContent = recipe.description;
      }

      // 2. Logic for all other Flip Cards (Using the flip-back structure)
    } else {
      const recipeCardElement = document.getElementById(recipe.id);

      if (recipeCardElement) {
        // Find the target container inside the flip card's flip-back section
        const targetContainer =
          recipeCardElement.querySelector(".js-recipe-details");

        if (targetContainer) {
          // Inject the H4/P data block
          targetContainer.innerHTML = injectedDataHTML;
        }
      }
    }
  });
}

// Execute the function when the page loads
populateRecipeCards();

// ==============================================================================
//                      --- CONTACT FORM VALIDATION ---
// ==============================================================================

// 1. Get references to form elements
const contactForm = document.getElementById("contact-form");
const validateMsg = document.getElementById("validate-msg");

// 2. Add event listener for form submission
contactForm.addEventListener("submit", (event) => {
  // Overrides the default browser refresh when the submit button is pressed.
  event.preventDefault();

  // --- Variables to validate and capture data ---
  // Get values from input fields inside the submit handler
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const subscription = document.getElementById("subscription").checked;

  // Email pattern checks for all the symbols that would be needed for an email address.
  // NOTE: This RegEx is functional but simple. Modern forms often rely on built-in 'type="email"' validation.
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Modernized RegEx syntax

  let msgHTML = "";

  // 1. Checks if all required fields are filled out.
  if (!firstName || !lastName || !phone || !message || !email) {
    msgHTML = '<p style="color: red;">Please fill out all empty fields.</p>';
  }
  // 2. Checks if there is a valid email pattern.
  else if (!emailPattern.test(email)) {
    msgHTML = '<p style="color: red;">Please enter a valid email.</p>';
  }
  // 3. If all fields are filled out correctly, display thank you message.
  else {
    msgHTML = '<p style="color: red;">Thank you for submitting!</p>';

    // --- Data Capture and Console Logging (Only on successful submission) ---
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
      subscribe: subscription,
    };

    // Displays what the user wrote in the console.
    console.log(JSON.stringify(formData));
  }

  // Display the validation message
  validateMsg.innerHTML = msgHTML;
});
