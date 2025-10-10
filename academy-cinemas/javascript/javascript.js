// =========================================================================
// BOOTSTRAP TOAST (Step 370)
// =========================================================================

// 1. INITIALIZE TOAST
const toastElement = document.getElementById("toastDisplay");
const toastInstance = new bootstrap.Toast(toastElement);

// 2. FUNCTION TO CAPTURE DATA AND DISPLAY TOAST
function displaySelectedMovieOptions() {
  // --- Data Capture ---
  const movieSelect = document.getElementById("movieSelect");
  const movie = movieSelect.options[movieSelect.selectedIndex].text;
  const timeSelect = document.getElementById("timeSelect");
  const time = timeSelect.options[timeSelect.selectedIndex].text;
  const quantity = document.getElementById("quantity").value;

  // --- Message Assembly ---
  const message = `Purchase confirmed for: ${movie}\nTime: ${time}\nTickets: ${quantity}`;

  // --- Display Toast ---
  const toastBody = document.getElementById("toastBody");
  toastBody.textContent = message;
  toastInstance.show();
}

// 3. BUY TICKETS WRAPPER FUNCTION
function buyTickets() {
  displaySelectedMovieOptions();
}

// =========================================================================
// BOOTSTRAP MODAL (Step 372: Accessibility Enhancement)
// =========================================================================

const signInModal = document.getElementById("signInModal");

if (signInModal) {
  signInModal.addEventListener("shown.bs.modal", () => {
    const emailInput = document.getElementById("emailInput");
    if (emailInput) {
      emailInput.focus();
    }
  });
}

// =========================================================================
// JQUERY IMPLEMENTATION (Steps 376 - 379)
// =========================================================================

// Best Practice: Consolidation
// All DOM manipulation logic is consolidated into this single, main $(document).ready() block.
// This is cleaner, more efficient, and easier to debug than using multiple redundant wrappers.
$(document).ready(function () {
  // === 1. POPOVER INITIALIZATION (Step 379: Refactor from pure JavaScript) ===
  // The complex pure JS code (Steps 367) has been removed.
  // This refactor correctly re-implements the star-rating image logic using jQuery's .attr() method.
  $('[data-bs-toggle="popover"]').each(function () {
    // 1. Use jQuery's .attr() method to retrieve the custom image source.
    const imgSrc = $(this).attr("data-bs-image");

    // 2. Create the HTML content with the image path.
    const contentHTML = `<img src="${imgSrc}" class="star-rating" alt="Movie Rating Stars">`;

    // 3. Initialize the Popover using the Bootstrap 5 constructor syntax,
    //    passing the custom content and options.
    new bootstrap.Popover(this, {
      content: contentHTML,
      html: true,
      trigger: "hover",
    });
  });

  // === 2. MOBILE MENU AUTOCLOSE (Step 379) ===
  // Close the mobile menu when a navigation link is clicked
  /**
   * On click when an element contains just the nav-link class and not the dropdown-toggle and then also close when an element with the class .dropdown-item (each movie link) has been clicked
   */
  $(".navbar-nav").on(
    "click",
    '.nav-link:not(".dropdown-toggle"), .dropdown-item',
    function () {
      // Collapse the navbar when a link or dropdown item is clicked.
      $(".navbar-collapse").collapse("hide");
    }
  );

  // === 3. SHRINK ON SCROLL LOGIC (Steps 377/378) ===
  // The core of this logic is the efficient use of the .addClass() and .removeClass() jQuery methods.
  // Instead of manually changing multiple CSS properties, we let jQuery toggle a single CSS class (.nav-shrink)
  // based on the window's scroll position, which is a massive improvement in code maintainability.

  // This function is attached to the scroll event to dynamically manage the 'nav-shrink' class.
  $(document).on("scroll", function () {
    /**
     * When the webpage is scrolled down from the top by 50px this if statement will trigger.
     */
    if ($(document).scrollTop() > 50) {
      /**
       * Once the 50px requirment has been met add the nav-shrink class selector to the same HTML element that has the nav class
       */
      $("nav").addClass("nav-shrink");
      /**
       * Adjust the position of the mobile drop menu to accomodate the new height decrease
       */
      $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
      /**
       * if the webpage has not been scrolled down or is back at the top the nav-shrink class selector is removed from the HTML element with the nav class selector
       */
      $("nav").removeClass("nav-shrink");
      /**
       * The margin for the drop down menu is now returned to it's original amount
       */
      $("div.navbar-collapse").css("margin-top", "14px");
    }
  });
});
