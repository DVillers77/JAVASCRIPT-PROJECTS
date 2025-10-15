# 🚀 TaskMaster TODO App

A clean, modern, and accessible single-page web application for managing daily
tasks. Built using vanilla JavaScript, HTML5, and CSS3, it features persistent
storage, dark mode, and a highly refined user experience.

## ✨ Features

- **Persistent Storage:** Tasks are saved and loaded automatically using the
  browser's `localStorage`.
- **Light/Dark Theme Toggle:** Users can switch between a default light theme
  and a high-contrast dark theme, with preferences saved across sessions.
- **Accessibility (A11y) Focused:** Includes explicit `<label>` elements,
  `aria-label` for screen readers, and full keyboard control (submit task with
  **Enter key**).
- **Core Functionality:**
  - Add new tasks.
  - Mark tasks as completed (with a persistent strikethrough).
  - Delete individual tasks.
  - "Clear All" to remove all completed tasks.
  - "Undo" to revert the last task deletion or completion state change.
- **Responsive UI:** Optimized layout for viewing on both desktop and mobile
  devices.

## 🛠️ Technologies Used

| Technology           | Purpose                                                                                                      |
| :------------------- | :----------------------------------------------------------------------------------------------------------- |
| **HTML5**            | Core structure and semantic markup.                                                                          |
| **CSS3**             | Layout (`Flexbox`), advanced theming using **CSS Custom Properties (Variables)**, and aesthetic refinements. |
| **JavaScript (ES6)** | Core application logic, DOM manipulation, task state management, and `localStorage` persistence.             |

## ⚙️ Setup and Installation

This is a front-end-only application and does not require a backend server or
complex build tools.

1.  **Clone the Repository (or download the files):**

    ```bash
    git clone [YOUR-REPO-URL]
    cd JAVASCRIPT-PROJECTS/todo-app
    ```

2.  **Open the Project:** Locate the `index.html` file in the `todo-app`
    directory.

3.  **Run Locally:** Open the `index.html` file directly in your preferred web
    browser (e.g., Chrome, Firefox) by double-clicking it.

The application will run immediately, and all functionality, including
persistence and theme switching, will work out of the box.

## 📂 Project Structure

The project is structured into three main directories: todo-app/ ├──
index.html # Main application entry point (structure) ├── css/ │ └── todo.css #
All styling, Flexbox rules, and Dark Mode theme variables └── js/ └── todo.js #
Core application logic and state management

## 🎨 Design & Layout Notes

The CSS employs several advanced techniques:

- **CSS Custom Properties (`:root`, `.dark-theme`):** Used to define a complete
  theme palette, enabling instant, application-wide theme switching.
- **Pixel-Perfect Alignment:** Uses a combination of `display: flex`,
  `align-items: center`, and targeted fixes (`vertical-align: top`) to ensure
  the input field, buttons, and task list items are perfectly aligned
  horizontally.
- **Component-Based Styling:** Clearly separated styling for the Input Bar, Task
  List, Footer, and the Theme Toggle button.

## 👥 Acknowledgments

Developed as a step-by-step project exercise to demonstrate modern front-end
application development principles, including state management, UX refinement,
and accessibility.
