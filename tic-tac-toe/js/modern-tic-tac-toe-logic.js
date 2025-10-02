// --- 1. GAME STATE (The Model) ---

// Current player: 'X' starts
let activePlayer = "X";

// Current difficulty setting. 'hard' by default.
let currentDifficulty = "hard";

// Allows HTML buttons to set the difficulty
function setDifficulty(level) {
  currentDifficulty = level;
  resetGame(); // Reset the game when difficulty changes
}

// --- SCORE STATE ---
let scoreX = 0;
let scoreO = 0;
let scoreTies = 0;

// Function to safely get scores from localStorage or return 0
function getScores() {
  scoreX = parseInt(localStorage.getItem("ticTacToeXWins")) || 0;
  scoreO = parseInt(localStorage.getItem("ticTacToeOWins")) || 0;
  scoreTies = parseInt(localStorage.getItem("ticTacToeTies")) || 0;
}

// Function to update the score in localStorage
function saveScores() {
  localStorage.setItem("ticTacToeXWins", scoreX);
  localStorage.setItem("ticTacToeOWins", scoreO);
  localStorage.setItem("ticTacToeTies", scoreTies);
}

// Function to update the display (The View)
function updateScoreDisplay() {
  // Updated strings to reflect the User and Computer icons
  document.getElementById("x-wins").innerText = `User Wins: ${scoreX}`;
  document.getElementById("o-wins").innerText = `Computer Wins: ${scoreO}`;
  document.getElementById("ties").innerText = `Ties: ${scoreTies}`;
}

// Public function for the Reset button (Perspirant Reset Option)
function resetScores() {
  scoreX = 0;
  scoreO = 0;
  scoreTies = 0;
  saveScores();
  updateScoreDisplay();
}

// The new, clean game state array: 9 slots, initially all empty (null).
// This replaces the old selectedSquares array with cleaner state management.
let board = Array(9).fill(null);

// All 8 combinations that result in a win. This replaces the 16 verbose if/else checks.
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Vertical
  [0, 4, 8],
  [2, 4, 6], // Diagonal
];

// --- COORDINATE MAPPING (For Drawing Lines) ---
// Maps the winning combo indices (e.g., "0,1,2") to canvas coordinates [startX, startY, endX, endY].
const LINE_COORDINATES = {
  // Horizontal Lines (Rows)
  "0,1,2": [50, 100, 558, 100],
  "3,4,5": [50, 304, 558, 304],
  "6,7,8": [50, 508, 558, 508],
  // Vertical Lines (Columns)
  "0,3,6": [100, 50, 100, 558],
  "1,4,7": [304, 50, 304, 558],
  "2,5,8": [508, 50, 508, 558],
  // Diagonal Lines
  "0,4,8": [100, 100, 520, 520],
  "2,4,6": [508, 100, 100, 508],
};

// CRITICAL FIX: Global element references defined with 'let' and initialized to null
let boardElement = null;
let canvas = null;
let ctx = null;

// --- 2. GAME FUNCTIONS (The Controller & View) ---

// This function starts the game and handles the user's click.
function handleMove(event) {
  // We only care about clicks on <td> elements within the table
  if (event.target.tagName !== "TD") {
    return;
  }

  const squareNumber = parseInt(event.target.id);

  // Stop if the square is already taken
  if (board[squareNumber] !== null) {
    return;
  }

  audio("./media/x-move.mp3");

  // Update the Model (Game State)
  board[squareNumber] = activePlayer;

  // Update the View (Display the X or O image)
  renderBoard();

  // Check for win/tie conditions
  const winnerInfo = checkWinner();

  if (winnerInfo) {
    handleWin(winnerInfo.combo);
    return;
  }

  if (board.every((cell) => cell !== null)) {
    handleTie();
    return;
  }

  // Switch player
  activePlayer = activePlayer === "X" ? "O" : "X";

  // If the next player is 'O' (Computer), trigger the computer's turn
  if (activePlayer === "O") {
    disableClick();
    setTimeout(computersTurn, 1000);
  }
}

// This function updates the visual board based on the board array, using Font Awesome icons.
function renderBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById(i);
    const player = board[i];

    // Clear the cell contents first
    cell.innerHTML = "";

    if (player === "X") {
      // Human player: User Circle Icon (fa-solid fa-circle-user)
      cell.innerHTML = '<i class="fa-solid fa-circle-user player-x"></i>';
    } else if (player === "O") {
      // Computer player: Microchip Icon (fa-solid fa-microchip player-o)
      cell.innerHTML = '<i class="fa-solid fa-microchip player-o"></i>';
    }

    // Ensure no lingering background images interfere
    cell.style.backgroundImage = "";
  }
}

// This function efficiently checks for a winner using the WINNING_COMBOS array.
function checkWinner() {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;

    // Check if all three squares are occupied AND they all match (are the same player)
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // Winner found! Return the player and the winning combination.
      return { winner: board[a], combo: combo };
    }
  }
  return null; // No winner found
}

// This function determines the computer's move based on the current difficulty setting.
function computersTurn() {
  let emptySquares = [];
  board.forEach((cell, index) => {
    if (cell === null) {
      emptySquares.push(index);
    }
  });

  if (emptySquares.length > 0) {
    let bestMove = -1;

    // --- Core AI Logic (Reusable for Hard & Medium) ---
    function findWinningOrBlockingMove(playerToCheck) {
      for (const move of emptySquares) {
        board[move] = playerToCheck; // Temporarily make the move
        if (checkWinner()) {
          board[move] = null; // Undo
          return move;
        }
        board[move] = null; // Undo
      }
      return -1;
    }

    switch (currentDifficulty) {
      case "hard":
        // PRIORITY 1: Win (O)
        bestMove = findWinningOrBlockingMove("O");

        // PRIORITY 2: Block (X)
        if (bestMove === -1) {
          bestMove = findWinningOrBlockingMove("X");
        }

        // PRIORITY 3: Take Center (4)
        if (bestMove === -1 && emptySquares.includes(4)) {
          bestMove = 4;
        }

        // PRIORITY 4: Take Corner (0, 2, 6, 8)
        if (bestMove === -1) {
          const corners = [0, 2, 6, 8];
          const openCorners = emptySquares.filter((square) =>
            corners.includes(square)
          );
          if (openCorners.length > 0) {
            const randomIndex = Math.floor(Math.random() * openCorners.length);
            bestMove = openCorners[randomIndex];
          }
        }

        // PRIORITY 5: Fall through to random move (Side)
        // If no priority move found, fall through to default random selection.
        break;

      case "medium":
        // PRIORITY 1: Win (O)
        bestMove = findWinningOrBlockingMove("O");

        // PRIORITY 2: Block (X)
        if (bestMove === -1) {
          bestMove = findWinningOrBlockingMove("X");
        }
        // Fall through to random move if no win/block is found.
        break;

      case "easy":
      default:
        // Pure random move (no priority logic)
        break;
    }

    // --- Execute Move (Random fallback if bestMove is still -1) ---
    if (bestMove === -1) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      bestMove = emptySquares[randomIndex];
    }

    // Execute the move
    board[bestMove] = activePlayer;
    renderBoard();
    audio("./media/o-move.mp3");

    // Check for win/tie immediately after computer's move (standard flow)
    const winnerInfo = checkWinner();

    if (winnerInfo) {
      handleWin(winnerInfo.combo);
    } else if (board.every((cell) => cell !== null)) {
      handleTie();
    } else {
      // Switch back to human player 'X'
      activePlayer = "X";
    }
  }
}

// Function to disable clicking during computer turn/win sequence
function disableClick() {
  boardElement.style.pointerEvents = "none";
  setTimeout(() => {
    boardElement.style.pointerEvents = "auto";
  }, 1000);
}

// Function to handle the win sequence
function handleWin(combo) {
  // Determine the winning player
  const winner = board[combo[0]];

  // --- NEW: INCREMENT SCORE AND PLAY CORRECT AUDIO ---
  if (winner === "X") {
    scoreX++;
    audio("./media/x-win.mp3"); // Human (User) Win Sound
  } else {
    scoreO++;
    audio("./media/x-lose.mp3"); // Human (User) Loss Sound
  }
  saveScores();
  updateScoreDisplay();

  // Draw the winning line
  const comboString = combo.join(",");
  const [coordX1, coordY1, coordX2, coordY2] = LINE_COORDINATES[comboString];

  drawWinLine(coordX1, coordY1, coordX2, coordY2);

  setTimeout(resetGame, 1500);
}

// In handleTie() function:
function handleTie() {
  // Increment the score
  scoreTies++;

  // Save the new score to localStorage
  saveScores();

  // Update the visual display
  updateScoreDisplay();

  // Replace: audio('./media/tie.mp3');
  audio("./media/tie-game.mp3"); // New sound for Tie Game
  setTimeout(resetGame, 1500);
}

function resetGame() {
  board.fill(null);
  activePlayer = "X";
  renderBoard(); // Clear images

  // Clear the canvas
  if (ctx) {
    ctx.clearRect(0, 0, 608, 608);
  }
}

function audio(audioURL) {
  let sound = new Audio(audioURL);
  sound.play();
}

// This function utilizes HTML canvas to draw win lines (re-integrated from original project).
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

  function animateLineDrawing() {
    // Must ensure ctx exists before attempting to draw
    if (!ctx) return;

    const animationLoop = requestAnimationFrame(animateLineDrawing);
    ctx.clearRect(0, 0, 608, 608);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x, y);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "rgba(255, 0, 100, 0.9)";
    ctx.stroke();

    // Horizontal/Vertical and Top-Left to Bottom-Right Diagonal (X increases, Y increases)
    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y < y2) {
        y += 10;
      }
      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }

    // Bottom-Left to Top-Right Diagonal (X increases, Y decreases)
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }

    // Top-Right to Bottom-Left Diagonal (The 6,4,2 line: X decreases, Y increases)
    if (x1 >= x2 && y1 <= y2) {
      if (x > x2) {
        x -= 10;
      }
      if (y < y2) {
        y += 10;
      }
      if (x <= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }

  disableClick();
  animateLineDrawing();
}

// --- INITIALIZATION (Run when the DOM is ready) ---

function init() {
  // Assign global element variables inside init() to ensure they exist
  boardElement = document.querySelector(".center-container table");
  canvas = document.getElementById("win-lines");
  ctx = canvas ? canvas.getContext("2d") : null;
  // --- NEW: INITIALIZE SCORES ---
  getScores(); // Load scores from localStorage
  updateScoreDisplay(); // Display loaded scores

  // Attach the Event Listener to the main table element
  if (boardElement) {
    boardElement.addEventListener("click", handleMove);
  }
}

// Attach the main initialization function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", init);
