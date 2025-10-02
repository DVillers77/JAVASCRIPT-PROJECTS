let activePlayer = "x";
let selectedSquares = [];
// CRITICAL FIX 1: Defines the body variable for disableClick() to work.
const body = document.getElementById("body");

// This function places an X or O and handles player switching and computer turn logic.
function placeXOro(squareNumber) {
  // Checks if the square has already been selected using .some().
  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    let select = document.getElementById(squareNumber);

    // Places the correct image (X or O).
    if (activePlayer === "x") {
      select.style.backgroundImage = 'url("images/x.png")';
    } else {
      select.style.backgroundImage = 'url("images/o.png")';
    }

    // Records the move (e.g., "5X" or "7O") by forcing the activePlayer to uppercase. (Final Logic Fix)
    selectedSquares.push(squareNumber + activePlayer.toUpperCase());

    // Checks for a win or a tie.
    checkWinConditions();

    // Switches the active player.
    if (activePlayer === "x") {
      activePlayer = "o";
    } else {
      activePlayer = "x";
    }

    // Plays the placement sound.
    audio("./media/place.mp3");

    // If the new active player is 'o' (computer), initiate computer turn.
    if (activePlayer === "o") {
      disableClick();
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    return true; // Move was valid.
  }
  return false; // Move was invalid (square was taken).
}

// This function handles the computer's turn by picking a random, available square.
function computersTurn() {
  let success = false;
  let pickASquare;
  while (!success) {
    // Generates a random index between 0 and 8.
    pickASquare = String(Math.floor(Math.random() * 9));

    // If the random square is empty, placeXOro() places the O and switches player.
    if (placeXOro(pickASquare)) {
      // CRITICAL FIX 2: The redundant call is DELETED to stop corrupting the game state.
      // placeXOro(pickASquare);
      success = true;
    }
  }
}

// This function parses the selectedSquares array to search for win conditions.
function checkWinConditions() {
  // Helper function to check if three specific squares are in selectedSquares.
  function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a === true && b === true && c === true) {
      return true;
    }
    // CRITICAL FIX 3: MUST explicitly return false to prevent win checks from failing.
    return false;
  }

  // --- X WIN CONDITIONS ---
  if (arrayIncludes("0X", "1X", "2X")) {
    drawWinLine(50, 100, 558, 100);
  } else if (arrayIncludes("3X", "4X", "5X")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6X", "7X", "8X")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0X", "3X", "6X")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("1X", "4X", "7X")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("2X", "5X", "8X")) {
    drawWinLine(508, 50, 508, 558);
  }
  // Final Visual Fix: Corrected coordinates for 6, 4, 2 diagonal (High-right to low-left)
  else if (arrayIncludes("6X", "4X", "2X")) {
    drawWinLine(508, 100, 100, 508);
  } else if (arrayIncludes("0X", "4X", "8X")) {
    drawWinLine(100, 100, 520, 520);
  }

  // --- O WIN CONDITIONS ---
  else if (arrayIncludes("0O", "1O", "2O")) {
    drawWinLine(50, 100, 558, 100);
  } else if (arrayIncludes("3O", "4O", "5O")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6O", "7O", "8O")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0O", "3O", "6O")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("1O", "4O", "7O")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("2O", "5O", "8O")) {
    drawWinLine(508, 50, 508, 558);
  }
  // Final Visual Fix: Corrected coordinates for 6, 4, 2 diagonal
  else if (arrayIncludes("6O", "4O", "2O")) {
    drawWinLine(508, 100, 100, 508);
  } else if (arrayIncludes("0O", "4O", "8O")) {
    drawWinLine(100, 100, 520, 520);
  }

  // --- TIE CONDITION ---
  else if (selectedSquares.length >= 9) {
    audio("./media/tie.mp3");
    setTimeout(function () {
      resetGame();
    }, 500);
  }
}

// This function makes the body element temporarily unclickable.
function disableClick() {
  body.style.pointerEvents = "none";
  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

// This function plays a sound clip.
function audio(audioURL) {
  let sound = new Audio(audioURL);
  sound.play();
}

// This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  const canvas = document.getElementById("win-lines");
  const c = canvas.getContext("2d");

  let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = "rgba(70, 255, 130, 0.9)";
    c.stroke();

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

  // Function to clear the canvas and reset the game.
  function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
    resetGame();
  }

  disableClick();
  audio("./media/winGame.mp3");
  animateLineDrawing();

  setTimeout(function () {
    clear();
  }, 1000);
}

// This function resets the game (clears images and the selectedSquares array).
function resetGame() {
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = "";
  }
  selectedSquares = [];
}
