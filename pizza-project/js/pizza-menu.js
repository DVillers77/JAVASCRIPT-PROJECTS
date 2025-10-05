// !  -- MODERNIZATION: Creating a look-up object for easy price management. This replaces the complex 'if/else if' chain.  -->
const PIZZA_PRICES = {
  // Prices based on the original assignment logic
  "Personal Pizza": 6,
  "Small Pizza": 8,
  "Medium Pizza": 10,
  "Large Pizza": 14,
  "Extra Large Pizza": 16,
};

// !  -- This function is called when the "Place Order" button is clicked.  -->
function getReceipt() {
  // !  -- MODERNIZATION: Using 'let' for variables that change (mutable).  -->
  let text1 = "<h3>You Ordered:</h3>";
  let runningTotal = 0;
  let sizeTotal = 0;
  let selectedSize = "";

  // !  -- MODERNIZATION: Using 'document.querySelectorAll' is the modern standard for element selection.  -->
  const sizeElements = document.querySelectorAll(".size");

  // Loop through all size radio buttons to find the selected one.
  // !  -- MODERNIZATION: Using 'let' for the loop counter.  -->
  for (let i = 0; i < sizeElements.length; i++) {
    if (sizeElements[i].checked) {
      selectedSize = sizeElements[i].value;
      // !  -- MODERNIZATION: Using Template Literals (backticks) for clean string building.  -->
      text1 += `${selectedSize}<br>`;
      break; // Stop looping once the selection is found.
    }
  }

  // Lookup the size price using the price object. If the size is found, use its price; otherwise, use 0.
  sizeTotal = PIZZA_PRICES[selectedSize] || 0;

  runningTotal = sizeTotal;

  // !  -- MODERNIZATION: Using Template Literals for all console logging for better readability.  -->
  console.log(`${selectedSize} = $${sizeTotal}.00`);
  console.log(`size text1: ${text1}`);
  console.log(`subtotal: $${runningTotal}.00`);

  // Pass the current state variables to the topping function.
  getTopping(runningTotal, text1);
}

// !  -- This function handles the toppings calculation and final output.  -->
function getTopping(runningTotal, text1) {
  let toppingTotal = 0;
  // !  -- MODERNIZATION: Using 'const' for the array since we add to it, but don't reassign the array itself.  -->
  const selectedTopping = [];

  // !  -- MODERNIZATION: Using 'document.querySelectorAll' for element selection.  -->
  const toppingElements = document.querySelectorAll(".toppings");

  // Loop through all topping checkboxes.
  for (let j = 0; j < toppingElements.length; j++) {
    if (toppingElements[j].checked) {
      selectedTopping.push(toppingElements[j].value);
      // !  -- MODERNIZATION: Using Template Literals for logging and building the receipt.  -->
      console.log(`selected topping item: (${toppingElements[j].value})`);
      text1 += `${toppingElements[j].value}<br>`;
    }
  }

  // 1. CALCULATE TOPPING PRICE (Logic: first two toppings are free, subsequent ones are $1 each)
  const toppingCount = selectedTopping.length;

  if (toppingCount > 2) {
    // !  -- LOGIC CHANGE: Subtracting 2 for two free toppings!  -->
    toppingTotal = toppingCount - 2;
  } else {
    toppingTotal = 0;
  }

  // 2. FINAL TOTAL
  // !  -- MODERNIZATION: Using the shorthand assignment operator.  -->
  runningTotal += toppingTotal;

  // Final Logging
  console.log(`total selected topping items: ${toppingCount}`);
  // !  -- UPDATED LOGGING TEXT: Reflecting the two free toppings.  -->
  console.log(
    `${toppingCount} toppings - 2 free toppings = $${toppingTotal}.00`
  );
  console.log(`topping text1: ${text1}`);
  console.log(`Purchase Total: $${runningTotal}.00`);

  // 3. DISPLAY RECEIPT
  // Display the list of ordered items.
  document.getElementById("showText").innerHTML = text1;

  // Display the final price.
  // !  -- MODERNIZATION: Using Template Literals for clean HTML injection.  -->
  document.getElementById(
    "totalPrice"
  ).innerHTML = `<h3>Total: <strong>$${runningTotal}.00</strong></h3>`;
}
