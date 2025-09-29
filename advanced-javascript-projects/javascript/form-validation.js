/*
/
/-------------------------------------------------------------------------------
/                       CONTACT FORM VALIDATION
/-------------------------------------------------------------------------------
/
*/

// This function is called when the user clicks the submit button.
function validateForm() {
  // 1. Get the value of the 'fname' field (First Name).
  // document.forms["myForm"] accesses the form by its name attribute.
  // .fname.value gets the value of the input field named 'fname'.
  let x = document.forms["myForm"]["fname"].value;

  // 2. Check if the input field is empty.
  if (x == "") {
    // 3. If it's empty, alert the user.
    alert("First Name must be filled out");

    // 4. Return false to STOP the form from submitting.
    return false;
  }

  // 5. If the field is NOT empty, the function returns true, and the form will submit.
  return true;
}
