# 🐾 We Love Animals - One Page Website

A fully responsive, one-page website dedicated to animal lovers, featuring modern web development techniques including **CSS Custom Properties** for theming, **JavaScript** for enhanced user interactivity, and full accessibility support.

---

## ✨ Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Accessible Navigation:** Uses semantic $\text{HTML}$ and smooth scrolling links.
- **Interactive Image Gallery (Lightbox):** A functional modal gallery for viewing high-resolution images.
- **Dual Theme System:** Implements a sophisticated dark/light mode toggle that respects the user's operating system preferences while allowing for a manual override.
- **Modern $\text{CSS}$ Theming:** Uses $\text{CSS}$ Custom Properties (Variables) for easy and efficient color management.
- **Contact Form:** A simple form area with semantic inputs.

---

## 🎨 Theme System: How It Works

This project uses a robust three-part strategy to manage its color themes, ensuring the manual toggle always works.

1.  **Default Theme ($\text{CSS}$ `:root`):**

    - The `:root` block defines the **Light Theme** variables (`--color-background-primary`, etc.). This is the site's default appearance.

2.  **OS Preference Dark Theme ($\text{CSS}$ `@media`):**

    - The `@media (prefers-color-scheme: dark)` query overrides the `:root` variables to switch the theme to **Dark Mode** if the user's operating system preference is set to dark.

3.  **Manual Toggle Override ($\text{JS}$ and $\text{CSS}$ Class):**
    - The **$\text{JavaScript}$** uses the `toggleTheme()` function to apply the class `.light-theme-manual` or `.dark-theme` to the `<body>` element.
    - The **$\text{CSS}$** then uses the **`body.light-theme-manual`** and **`body.dark-theme`** selectors (which have higher **specificity** than the `@media` query) to force the theme to the desired color scheme, effectively overriding the OS setting.

---

## 📁 Project Structure

This project follows a standard file structure:

---

## 💻 Setup and Usage

1.  **Clone or Download:** Get a copy of the files onto your local machine.
2.  **Open:** Simply open `one-page-website.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3.  **Toggle:** Use the **🌓 Theme button** in the navigation bar to manually switch between the light and dark themes.

### **Key $\text{JavaScript}$ Functions**

| Function Name           | Location                                                                           | Purpose                                                                                                                         |
| :---------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `toggleTheme()`         | Global Scope (or inside `DOMContentLoaded` using a direct $\text{HTML}$ `onclick`) | Toggles the theme based on the current state.                                                                                   |
| `setTheme(theme)`       | Global Scope                                                                       | Helper function that adds/removes the `dark-theme` and `light-theme-manual` classes and saves the preference to `localStorage`. |
| `loadThemePreference()` | Called inside `DOMContentLoaded`                                                   | Checks `localStorage` and OS preference on page load to set the initial theme state.                                            |
| `openLightbox(index)`   | Inside `DOMContentLoaded`                                                          | Controls the opening and navigation of the image gallery modal.                                                                 |
