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

  /* --- CAR TITLES SHOW/HIDE (Hover Effect - Replaced .show() with Chained Effects) --- */

  $("#classic-cars").on({
    // mouseenter now uses chained effects with a callback function
    mouseenter: function () {
      // 1. Title One: Show instantly
      $("#title-one").show(1);

      // 2. Title Two: Delay, then slide up, then slide down with a callback
      $("#title-two")
        .delay(1500)
        .slideUp(500)
        .slideDown(500, function () {
          // This callback runs ONLY after the slideDown is fully complete
          console.log("Porsche Carrera title animation sequence finished!");
        });

      // 3. Title Three: Delay and show instantly
      $("#title-three").show(2000);
    },

    // mouseleave remains the same (using .hide for reverse stagger)
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

/* --- EVENT CHALLENGE: Single-Use Click (.one) --- */

// The .one() method runs the click function only once per matched element.
$("img").one("click", function () {
  // 'this' refers to the specific image element clicked
  const altText = $(this).attr("alt");
  alert(
    "You triggered a single-use event! This will not happen again for this image. Image: " +
      altText
  );
});
