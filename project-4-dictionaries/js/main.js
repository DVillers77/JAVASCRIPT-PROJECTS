function my_Dictionary() {
  let Value = {
    Key1: "Value1",
    Key2: "Value2",
  };
  document.getElementById("Dictionary").innerHTML = Value.Key1;
}

/* dictionary challenge */
function my_Dictionary_challenge() {
  let Value = {
    Key1: "Value1",
    Key1: "Value2",
  };
  document.getElementById("Dictionary-challenge").innerHTML = Value.Key1;
}

/* delete assignment */

function my_Dictionary_delete() {
  let Value = {
    Key1: "Value1",
    Key2: "Value2",
  };
  delete Value.Key1;
  document.getElementById("Dictionary-delete").innerHTML = Value.Key1;
}
