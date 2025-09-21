// DICTIONARY ASSIGNMENT

// This is a set of instructions that we can run by clicking the paragraph on the webpage.
// We've named this set of instructions "my_Dictionary".
function my_Dictionary() {
  // This line creates a container for a dictionary, which is a list of words and their definitions.
  // We've named this container "Value".
  let Value = {
    // This is the first entry in our dictionary.
    // "Key1" is the word (the key), and "Value1" is its definition (the value).
    Key1: "Value1",
    // This is the second entry.
    // "Key2" is the word (the key), and "Value2" is its definition (the value).
    Key2: "Value2",
  };
  // This line looks for a specific spot on the webpage that has the ID "Dictionary".
  // The .innerHTML part means we are going to change the text inside that spot.
  // We are setting the text to be the definition that is connected to the word "Key1" in our dictionary.
  document.getElementById("Dictionary").innerHTML = Value.Key1;
}

// DICTIONARY CHALLENGE

/*
  This is a challenge to see what happens when you have two of the same words
  (keys) in your dictionary.
*/
// This is a new set of instructions, and we've named it "my_Dictionary_challenge".
function my_Dictionary_challenge() {
  // We are creating a new dictionary here, also named "Value".
  let Value = {
    // Here is the first entry. The key is "Key1" and the value is "Value1".
    Key1: "Value1",
    // Here is a second entry with the same word, "Key1", but a different definition, "Value2".
    // When the computer reads this, it will replace the first "Key1" with this one.
    Key1: "Value2",
  };
  // This line looks for the spot on the webpage with the ID "Dictionary-challenge".
  // It then places the definition that is now connected to "Key1" inside that spot.
  // Since "Value2" was the last one, it will be the one that is displayed.
  document.getElementById("Dictionary-challenge").innerHTML = Value.Key1;
}

// DICTIONARY DELETE ASSIGNMENT

/*
  This is an assignment that shows how to delete an entry from a dictionary.
*/
// This is a new set of instructions, and we've named it "my_Dictionary_delete".
function my_Dictionary_delete() {
  // We are creating another dictionary here.
  let Value = {
    Key1: "Value1",
    Key2: "Value2",
  };
  // This is a special command called "delete".
  // It removes the word "Key1" and its definition from our dictionary completely.
  delete Value.Key1;
  // This line looks for the spot on the webpage with the ID "Dictionary-delete".
  // We are trying to get the definition for "Key1" but we just deleted it.
  // Since "Key1" no longer exists in our dictionary, the computer will say "undefined."
  document.getElementById("Dictionary-delete").innerHTML = Value.Key1;
}
