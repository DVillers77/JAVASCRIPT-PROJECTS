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

// SLIDE SHOW

// Sets the initial slide index to 1.
let slideIndex = 1;
// Calls the showSlides function to display the first image by default.
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  // Changes the current slide by adding or subtracting from the slide index.
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  // Sets the current slide to a specific index when a dot is clicked.
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  // Gets all elements with the class "mySlides" (the images).
  let slides = document.getElementsByClassName("mySlides");
  // Gets all elements with the class "dot" (the thumbnail dots).
  let dots = document.getElementsByClassName("dot");
  // Checks if the slide index has gone past the last slide.
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Checks if the slide index has gone before the first slide.
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Loops through all slides and hides them.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Loops through all dots and removes the "active" class.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Displays the current slide (the index is adjusted for the array's zero-based index).
  slides[slideIndex - 1].style.display = "block";
  // Adds the "active" class to the current dot to highlight it.
  dots[slideIndex - 1].className += " active";
}
