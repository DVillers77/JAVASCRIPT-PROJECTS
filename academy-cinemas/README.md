# Academy Cinemas Website 🍿

## Project Overview

This repository contains the completed static website for the Academy Cinemas
project. This version marks the transition from a purely HTML/CSS/Bootstrap
project to a **JavaScript-focused application**. It incorporates advanced
**Bootstrap 5.2.3**, **jQuery**, and custom JavaScript to enhance user
experience and interactivity, fulfilling the requirements of the final Bootstrap
with jQuery submission assignment.

The website is fully responsive, leveraging Bootstrap's grid system and advanced
jQuery functionality.

## Key Features Implemented

The following components were implemented and rigorously corrected from the
original tutorial instructions to adhere to modern best practices, accessibility
standards, and responsive design principles:

### 1. Interactive Components (Bootstrap & Vanilla JavaScript)

| Component    | Purpose                                                 | Implementation Detail                                                                                             |
| :----------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| **Popovers** | Display movie rating stars on hover over a poster.      | Corrected implementation using vanilla JavaScript, Bootstrap Bundle, and clean data attributes (`data-bs-image`). |
| **Toasts**   | Provide non-intrusive confirmation of ticket purchases. | Corrected instructor's faulty CSS centering and used `textContent` for secure data injection.                     |
| **Modal**    | Provides a dedicated "Sign In" window.                  | Added a fully accessible sign-in form. Includes custom JavaScript to autofocus the first input field on open.     |

### 2. jQuery Enhancements and Refactoring (Steps 376-379) ✨

| Feature                   | Type           | Implementation Detail                                                                                                                                                           |
| :------------------------ | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Shrink-on-Scroll**      | UX Enhancement | Used `$(document).on("scroll")` to add/remove the `.nav-shrink` class to the Navbar after a 50px scroll, providing a compact, sticky header.                                    |
| **Popover Refactor**      | Code Refactor  | Migrated Popover initialization from vanilla JavaScript to a cleaner $\text{jQuery}$ `.each()` loop, correctly pulling the rating image source via `.attr()`.                   |
| **Mobile Menu Autoclose** | Mobile UX      | Used $\text{jQuery}$'s `.on('click', ...)` event delegation to force the Bootstrap Navbar to collapse (`.collapse('hide')`) when a navigation link is clicked on a mobile view. |
| **Code Consolidation**    | Best Practice  | All $\text{jQuery}$ logic was consolidated into a **single `$(document).ready()` wrapper**, improving efficiency and code maintainability (avoiding redundant execution).       |

### 3. Critical Mobile UX & Bug Fixes 🐛

- **Tickets Section Stacking Fix:** Addressed a critical bug where the **Movie,
  Time, and Tickets** selection cards broke the layout on mobile screens, hiding
  the "Buy Tickets" button.
  - **Fix:** Updated the columns to **`.col-12 col-md`** to force vertical
    stacking on small screens.
  - **Fix:** Used the **`mt-4`** Bootstrap utility class on the button row to
    create necessary spacing, ensuring the button is always visible.
- **Popover Fix:** Resolved a series of complex bugs where the Popovers
  initially failed to display the rating image due to incomplete refactoring
  logic. The final $\text{jQuery}$ code correctly pulls and injects the image
  $\text{HTML}$.
- **Button Restoration:** Successfully restored the main "Buy Tickets" button
  which was inadvertently removed during the debugging and refactoring process.

### 4. File Structure

- `index.html`: Main page structure, including all $\text{Bootstrap}$ component
  $\text{HTML}$.
- `css/custom.css`: Global custom styles and component positioning fixes (e.g.,
  Toast centering).
- `css/custom-css-media.css`: Dedicated file for all responsive adjustments and
  media queries.
- `javascript/javascript.js`: **Primary application file** containing all
  Vanilla JavaScript and all final $\text{jQuery}$ implementations.
