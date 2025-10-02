# MODERN TIC-TAC-TOE: Player vs. AI Submission

## 📝 Overview

This project is a comprehensive implementation of a Tic-Tac-Toe game using HTML, CSS, and advanced JavaScript. It successfully transforms a basic game into a full-featured, AI-driven application with a modern, high-contrast theme, persistent score tracking, and an engaging user experience.

## ✨ Key Features & Multi-Step Development Summary

This project has been developed through a multi-step process, incorporating several advanced features and design improvements:

| Feature Area           | Description of Implementation                                                                                                                                              |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core Functionality** | Fully functional Tic-Tac-Toe game with player-vs-computer play, win condition checking, and tie detection.                                                                 |
| **AI Difficulty**      | Implements three distinct difficulty modes: **Easy** (random selection), **Medium** (mix of win/block), and **Hard** (unbeatable **Minimax algorithm**).                   |
| **Persistent Scores**  | Uses **`localStorage`** to track and save scores for "User Wins," "Computer Wins," and "Ties" across browser sessions, with a **Reset Scores** button.                     |
| **Aesthetics (Theme)** | Implemented a high-contrast **"Cyber" theme** with a dark background, neon-green grid, and updated button styling to align with the theme.                                 |
| **Game Markers**       | Replaced simple X/O images with modern, scalable **Font Awesome icons**: **User** (`fa-circle-user`) for the human and **Microchip** (`fa-microchip`) for the computer AI. |
| **Win Animation**      | Uses the HTML `<canvas>` element and `requestAnimationFrame` for a smooth, drawing-line animation to highlight the winning combination.                                    |
| **Audio Integration**  | Implements **five distinct sound effects** (Move-X, Move-O, Win, Loss, Tie) for key events, enhancing user feedback.                                                       |
| **Professionalism**    | Added explicit **Author Copyright** and **Sound Attribution** (for assets sourced from Zapsplat.com) in the footer.                                                        |

## 🛠 Project Files

| File                                | Purpose                           | Key Content                                                                                                                                         |
| :---------------------------------- | :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modern-tic-tac-toe.html`           | The application's main structure. | Links all resources, contains the scoreboard, difficulty selector, game board, win-lines canvas, and final attribution.                             |
| `css/modern-tic-tac-toe-styles.css` | All visual styling.               | Defines the "Cyber" theme, handles responsive sizing, and styles the Font Awesome icons and high-contrast buttons.                                  |
| `js/modern-tic-tac-toe-logic.js`    | All game functionality.           | Contains the Minimax AI, game state, score logic, event handlers, and the `drawWinLine` animation logic. **Includes extensive developer comments.** |
| `media/` folder                     | Audio Assets.                     | Contains the five custom MP3 files for game sounds.                                                                                                 |

## ⚙️ How to Run

1.  Clone or download this repository.
2.  Open the `modern-tic-tac-toe.html` file in your web browser.
3.  Choose a difficulty level and start playing!

---

## ©️ Attribution

- **Code:** &copy; 2024 \[Your Name]. All Rights Reserved.
- **Sound Effects:** Provided by [Zapsplat.com](https://www.zapsplat.com/).
