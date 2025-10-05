# Pizza Menu Order Demo

This project is an interactive web-based menu designed to demonstrate fundamental front-end development skills across HTML, modern CSS, and JavaScript. The user can select a pizza size, and choose multiple meat and vegetable toppings, with the final price calculated dynamically.

## Project Features

- **Responsive Menu Structure:** Implemented a multi-column layout to organize size and topping selections.
- **Modern CSS:** Utilized **CSS Custom Properties (`:root` variables)** for theme colors (sauce and dough color scheme).
- **JavaScript Logic:** Developed core functions to capture user input, calculate the running total, and display the final order receipt.
- **UX-Driven Pricing:** Clarified topping rules to ensure a smooth user experience, reflecting the JavaScript logic (2 free toppings, then $1.00 each).

## Assignments and Challenges Completed

| Step          | Type       | Description                                                                                                                                                                                                                                        |
| :------------ | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **313**       | HTML       | Implemented the basic menu structure, input elements, and `id` tags for size, meat toppings, and the final receipt area.                                                                                                                           |
| **314**       | CSS        | Introduced the first CSS file (`css/pizza-menu.css`) and applied initial styling to the main containers (`#menuBG`, `#frmMenu`, `#cart`).                                                                                                          |
| **315**       | CSS        | Defined the CSS for the two initial columns (`.left` and `.right`) using the `float` property to achieve a side-by-side layout.                                                                                                                    |
| **316**       | CSS        | Created a challenge to implement **CSS Custom Properties** (`:root` variables) for brand colors, using a `sauce` and `dough` color theme.                                                                                                          |
| **318**       | HTML/CSS   | Implemented challenges to add the **Small Pizza** size and the **Salami** meat topping to the menu.                                                                                                                                                |
| **319**       | CSS        | Finalized styling for the project, applying the custom properties and ensuring consistent visual grounding in the theme.                                                                                                                           |
| **320**       | JS         | Wrote the core JavaScript functions (`getReceipt()` and `getTopping()`) to read user selections, calculate the total price, and display the final receipt. The code was later **modernized to ES6+ standards** (`const`/`let`, template literals). |
| **321**       | UX/HTML/JS | Enhanced User Experience by adding price details next to pizza sizes and clarifying the topping pricing structure on the menu. Implemented a feature to allow **two free toppings** in the JavaScript logic.                                       |
| **322**       | HTML/CSS   | Implemented the **Vegetable Toppings** section, requiring a structural refactor to increase the menu width to **600px** and introduce a **third column** (`.center`).                                                                              |
| **Structure** | HTML/CSS   | Refactored the menu structure to place all three option columns (`Size`, `Veggies`, `Meats`) into a unified `#menuOptions` container for better organization and styling control.                                                                  |
