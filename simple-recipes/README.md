# 🍜 Simple Recipes Website

A responsive, single-page website built to showcase recipe cards using modern HTML, CSS custom properties, and client-side JavaScript features like form validation and dynamic modals.

## ✨ Features

This project focuses on modernizing a static webpage with interactive JavaScript components:

- **Responsive Design:** Uses CSS Flexbox and media queries for seamless viewing across all device sizes.
- **CSS Custom Properties:** Implements a full color palette and shadow variables using `:root` to ensure consistency and easy maintenance.
- **Dynamic Recipe Cards:** Uses JavaScript to inject dynamic recipe data (prep time, servings, level) from a **Single Source of Truth (SSOT)** array into the HTML card backs.
- **Modern Modals:** Utilizes the native `<dialog>` element for recipe modals, providing built-in centering and accessibility features without needing complex CSS positioning.
- **Client-Side Form Validation:** Implements validation logic for the contact form, checking for required fields and proper email format.
- **UX Pattern Implementation:** Explores JavaScript timer functions (`setTimeout` and `clearTimeout`) to control modal behavior, demonstrating both good and poor User Experience (UX) patterns for testing purposes.

## 💻 Technologies Used

| Technology            | Purpose                                                  |
| :-------------------- | :------------------------------------------------------- |
| **HTML5**             | Semantic Structure, Native `<dialog>` element.           |
| **CSS3**              | Layout, Custom Properties, Responsive Styling.           |
| **JavaScript (ES6+)** | Data Handling, Form Validation, Modal Logic, and Timers. |

## 🚀 Getting Started

This project is entirely front-end and requires no server-side installation or dependencies.

1.  **Clone the Repository (or download the files):**
    ```bash
    git clone [YOUR-REPOSITORY-URL]
    ```
2.  **Open the File:**
    Locate the `index.html` file in the root directory and open it directly in any modern web browser (e.g., Chrome, Firefox, Edge).

## 🗂️ File Structure

The project follows a standard front-end directory structure:

## 🧠 Key Learning and Modernization

The development process involved several key modernization steps and fixes:

- **CSS Refactoring:** Updated several legacy styles to use modern selectors and replaced hardcoded values with CSS Custom Properties.
- **Form ID Fixes:** Successfully handled multiple ID changes (e.g., `#contact` to `#contact-form`) across HTML, CSS, and JavaScript.
- **Modal Fixes:** Implemented `display: inline-block` on the footer anchor tag (`<a>`) to correctly allow vertical margins (`margin-top`), fixing a crucial layout issue caused by the link's default `display: inline` property.
- **Timer Control (`setTimeout`/`clearTimeout`):** Learned to use timers not just for basic functions, but to coordinate events (opening a modal vs. manually closing it) to control UX behavior.

---

## 📝 Project Log (Assignments Completed)

### 1. Initial Data Injection

- **Objective:** Populate recipe cards dynamically using JavaScript.
- **Summary:** Created an array of objects (`allRecipesData`) as a Single Source of Truth (SSOT) and wrote functions to iterate through this data, injecting preparation time, servings, and level details into the corresponding HTML recipe cards and the featured section.

### 2. Contact Form Validation and Modernization

- **Objective:** Implement client-side form validation and capture data.
- **Summary:** Added a submit event listener to the form, used `event.preventDefault()` to stop the page refresh, validated user input (name, email format), and logged the captured `formData` object (using `JSON.stringify()`) to the console upon successful validation.

### 3. Modal Timer Challenge (UX Control)

- **Objective:** Implement automatic closing of the modal after 10 seconds.
- **Summary:** Used the **`setTimeout()`** method to trigger `modal.close()` after 10,000 milliseconds. Enhanced the solution by integrating **`clearTimeout()`** into the manual close button logic, allowing developers to test both intrusive (hard close) and controlled (manual override) UX timer patterns.
