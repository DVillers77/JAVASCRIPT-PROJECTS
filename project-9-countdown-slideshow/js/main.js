// This function will handle the countdown timer.
function countdown() {
  // Get the number of seconds from the input field and convert it to a number.
  let seconds = document.getElementById("seconds").value;

  // This nested function will be called every second.
  function tick() {
    // Decrease the value of seconds by one.
    seconds = seconds - 1;
    // Update the HTML element with the current number of seconds.
    document.getElementById("timer").innerHTML = seconds;

    // Check if the countdown has reached -1.
    if (seconds <= 0) {
      // If the countdown is over, show an alert and stop the timer.
      alert("Time's up!");
      // Set the timer display back to an empty string.
      document.getElementById("timer").innerHTML = "";
    } else {
      // If the countdown is still running, call the 'tick' function again after one second.
      setTimeout(tick, 1000);
    }
  }
  // Start the countdown by calling the 'tick' function for the first time.
  tick();
}
