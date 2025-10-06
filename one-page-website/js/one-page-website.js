// js/one-page-website.js

// -------------------------------------------------------------
// 1. THEME TOGGLE UTILITY FUNCTIONS (GLOBAL SCOPE)
// These functions are outside DOMContentLoaded to be callable directly from HTML.
// -------------------------------------------------------------

function setTheme(theme) {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme-manual");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme-manual");
    localStorage.setItem("theme", "light");
  }
}

// Function called by the HTML button's onclick attribute
function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

// -------------------------------------------------------------
// 2. MAIN DOM INITIALIZATION
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Apply theme immediately on load
  loadThemePreference();

  // (All your Lightbox code goes here)
}); // END OF DOMContentLoaded
