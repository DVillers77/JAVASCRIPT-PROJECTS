// ** jQuery PART 1 & 2: SHINE, SCROLL, HOVER, & TOGGLE **

$(document).ready(function () {
  /* --- SHINE ANIMATION LOOP (FIXED) --- */

  // The shineLoop function uses the chaining technique to utilize multiple
  // animate event methods in the same function.
  function shineLoop() {
    // IMPORTANT FIX: The two .animate calls MUST be chained without an intervening semicolon.
    $(".shine")
      .animate(
        // 1. Move background X position to the right
        { backgroundPositionX: "1600px" },
        3000 // Duration in milliseconds (3 seconds)
      ) // <-- NO SEMICOLON HERE! This is the fix.
      .animate(
        // 2. Chained animation: Move background X position back to the left
        { backgroundPositionX: "-800px" },
        3000 // Duration in milliseconds (3 seconds)
      );
  }

  // Set interval will repeat the shineLoop function and 0 sets the
  // delayed amount of time between each repeat.
  setInterval(shineLoop, 0);

  /* --- SHRINKING HEADER EFFECT --- */

  // Shrinks header size when the document is scrolled down by 50 pixels.
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
      $("h1").addClass("header-scrolled");
    } else {
      $("h1").removeClass("header-scrolled");
    }
  });

  /* --- CAR TITLES SHOW/HIDE (Hover Effect - Object Literal) --- */

  // Triggers the images to slide down one after the other when the user's mouse
  // enters the div area with the 'classic-cars' ID, and hides them on mouse leave.
  $("#classic-cars").on({
    // mouseenter is triggered when the mouse enters the element area.
    mouseenter: function () {
      // .show() starts instantly (1ms)
      $("#title-one").show(1);
      // Delay the second title reveal
      $("#title-two").show(1500);
      // Delay the third title reveal
      $("#title-three").show(2000);
    },

    // mouseleave is triggered when the mouse leaves the element area.
    mouseleave: function () {
      // Hide the titles with reverse delay for staggered effect
      $("#title-one").hide(2000); // Last to hide
      $("#title-two").hide(1500);
      $("#title-three").hide(1); // First to hide
    },
  });

  /* --- FAQ TOGGLE EFFECT --- */

  // Creates a toggle effect on each FAQ question by checking each element sibling.
  $("div.question").on("click", function () {
    // $(this) refers to the div.question that was clicked.
    // .next() finds the immediate following sibling element (div.answer).
    // .slideToggle('slow') smoothly shows or hides the answer.
    $(this).next().slideToggle("slow");
  });
});
