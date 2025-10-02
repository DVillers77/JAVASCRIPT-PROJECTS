// --- 1. THE CALCULATOR CLASS (The Model) ---

// Encapsulates all the data (state) and behavior (methods) of the calculator.
class Calculator {
  // The constructor is called when a new instance of the class is created.
  constructor(previousOperandTextElement, currentOperandTextElement) {
    // Store references to the display elements so the class can update them.
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    // Call the clear method to set the initial state of the calculator.
    this.clear();
  }

  // Resets all values to their default empty state (All Clear functionality).
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  // Implements the DEL (backspace) functionality by removing the last character.
  delete() {
    // The slice method returns a new string, cutting off the last character.
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // Appends a number (or decimal) to the current operand string.
  appendNumber(number) {
    // Prevent adding more than one decimal point.
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    // Convert both to strings and concatenate.
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // Handles logic when an operator (+, -, *, /) is chosen.
  chooseOperation(operation) {
    // If the current operand is empty, do nothing.
    if (this.currentOperand === "") {
      return;
    }
    // If there is already a previous operand, perform the calculation first.
    if (this.previousOperand !== "") {
      this.compute();
    }
    // Store the new operation and move the current number to the previous operand line.
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  // Performs the mathematical calculation based on the stored operation.
  compute() {
    // *** NEW: Capture the full expression BEFORE running the math ***
    const finalExpression = `${this.previousOperand} ${this.operation} ${this.currentOperand} =`;

    let computation;
    // parseFloat converts the string operands into actual numbers.
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    // Check if either operand is NaN (Not a Number, usually from empty string input).
    if (isNaN(prev) || isNaN(current)) {
      return;
    }

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        // Handle division by zero error for a safer user experience.
        if (current === 0) {
          computation = "Error";
          this.clear(); // Reset state after error
        } else {
          computation = prev / current;
        }
        break;
      default:
        return;
    }

    // Store the result in the current operand.
    this.currentOperand = computation;

    // *** NEW: Store the full expression (e.g., "10 + 5 =") in the previous operand line ***
    this.previousOperand = finalExpression;

    // Reset the operation so the next number starts a new calculation.
    this.operation = undefined;
  }

  // Helper function to format the number (e.g., adding commas for readability).
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    // Split the number into integer and decimal parts at the decimal point.
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    // If the number is 'Error', return it directly without formatting.
    if (stringNumber === "Error") {
      return stringNumber;
    }

    // Handle NaN or null integer part.
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      // Use local number formatting to add commas (e.g., 1000 -> 1,000).
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    // Recombine the integer part with the decimal part (if it exists).
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // *** MODIFIED METHOD FOR PERSISTENT HISTORY ***
  // Updates the text content of the two display elements (The View).
  updateDisplay() {
    // Update the bottom display (current input/result).
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );

    // Update the top display (history/context).
    if (this.operation != null) {
      // LOGIC FOR LIVE CALCULATION (e.g., 10 + 5)
      // Show: [Previous Number] [Operator] [Current Number being typed]
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation} ${this.getDisplayNumber(this.currentOperand)}`;
    } else {
      // LOGIC FOR POST-EQUALS DISPLAY
      if (this.previousOperand !== "") {
        // If previousOperand is not empty (i.e., we just pressed '='), display the full expression.
        this.previousOperandTextElement.innerText = this.previousOperand;
      } else {
        // Otherwise (cleared state), the previous line should be empty.
        this.previousOperandTextElement.innerText = "";
      }
    }
  }
}

// --- 2. WIRING THE JAVASCRIPT TO THE HTML (The Controller) ---

// Selecting all buttons using the data-type attributes we added to the HTML.
const numberButtons = document.querySelectorAll('[data-type="number"]');
const operatorButtons = document.querySelectorAll('[data-type="operator"]');

// Selecting the functional buttons.
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

// Selecting the two display elements (top and bottom lines).
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// Create an instance of the Calculator class.
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// Attach Event Listeners to the buttons:

// 1. Number and Decimal Buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Add the button's value (0-9 or .) to the current operand.
    calculator.appendNumber(button.value);
    // Always update the display immediately after a number input.
    calculator.updateDisplay();
  });
});

// 2. Operator Buttons (+, -, *, /)
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Store the operation and prepare for the second number input.
    calculator.chooseOperation(button.value);
    calculator.updateDisplay();
  });
});

// 3. Equals Button (=)
equalsButton.addEventListener("click", (button) => {
  // Perform the final calculation.
  calculator.compute();
  calculator.updateDisplay();
});

// 4. All Clear Button (AC)
allClearButton.addEventListener("click", (button) => {
  // Reset the entire calculator state.
  calculator.clear();
  calculator.updateDisplay();
});

// 5. Delete Button (DEL)
deleteButton.addEventListener("click", (button) => {
  // Remove the last digit from the current input.
  calculator.delete();
  calculator.updateDisplay();
});
