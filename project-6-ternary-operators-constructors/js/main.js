// PROJECT6_TERNARY__OPERATORS_CONSTRUCTORS ASSIGNMENT

// This function, named "rideFunction", checks a rider's height using a ternary operator.
function rideFunction() {
  // We are declaring two variables: "Height" to store the input and "Can_ride" to store the result string.
  var Height, Can_ride;
  // This line gets the value from the HTML input element with the ID "height".
  Height = document.getElementById("height").value;
  // This is the core of the function: the ternary operator.
  // It checks if "Height" is less than 52.
  // If it's true, it assigns the string "You are too short" to the "Can_ride" variable.
  // If it's false, it assigns the string "You are tall enough" to the "Can_ride" variable.
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  // Finally, this line takes the result string from "Can_ride" and adds the text " to ride."
  // It then displays the full message inside the HTML element with the ID "ride".
  document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}

//TERNARY OPERATORS CHALLENGE

// This function, named "votingAge", checks a user's age using a ternary operator.
function votingAge() {
  // We are declaring two variables: "Age" to store the input and "Can_vote" to store the result string.
  var Age, Can_vote;
  // This line gets the value from the HTML input element with the ID "voting-age".
  Age = document.getElementById("voting-age").value;
  // This is the ternary operator.
  // It checks if "Age" is less than 18.
  // If it's true, it assigns the string "You are too young" to the "Can_vote" variable.
  // If it's false, it assigns the string "You are old enough" to the "Can_vote" variable.
  Can_vote = Age < 18 ? "You are too young" : "You are old enough";
  // This line takes the result string from "Can_vote" and adds the text " to vote.".
  // It then displays the full message inside the HTML element with the ID "age".
  document.getElementById("age").innerHTML = Can_vote + " to vote.";
}

// CODING ASSIGNMENT

// This is a constructor function for creating Vehicle objects.
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

// These lines use the 'new' keyword to create three new Vehicle objects, each with unique properties.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This function will display information about one of the created objects.
function myFunction() {
  // This line accesses the paragraph element in the HTML and changes its content.
  // It uses the object 'Erik' to get its 'Vehicle_Color', 'Vehicle_Model', and 'Vehicle_Year' properties.
  // The 'this' keyword within the constructor allows this to happen seamlessly.
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

// NEW KEYWORD ASSIGNMENT

// This is a constructor function for creating Vehicle objects.
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

// These lines use the 'new' keyword to create three new Vehicle objects, each with unique properties.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This function will display information about one of the created objects.
function displayCar() {
  // This line accesses the paragraph element in the HTML and changes its content.
  // It uses the object 'Erik' to get its 'Vehicle_Color', 'Vehicle_Model', and 'Vehicle_Year' properties.
  // The 'this' keyword within the constructor allows this to happen seamlessly.
  document.getElementById("New_and_This").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

// RESERVED KEYWORD CHALLENGE
// This line will intentionally cause an error because 'let' is a reserved keyword.

/* You must comment the below line of code to run the rest of the code un commenting it will cause an error */

//let let = "This will cause an error!";

// CONSTRUCTOR FUNCTION
// This is a constructor function for creating 'Person' objects.
// It acts as a blueprint for new objects with properties like first name and age.
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// These lines use the 'new' keyword to create two new instances of the 'Person' object.
const myFather = new Person("John", "Doe", 65);
const myMother = new Person("Sally", "Rally", 62);

// This function will display the 'age' property of each object on the webpage.
function displayAges() {
  document.getElementById("reserved").innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age + ".";
}

// NESTED FUNCTIONS ASSIGNMENT

// This is the outer, or parent, function
function displayNestedFunction() {
  // 1. Declare the variable in the parent function.
  let startNumber = 5;

  // 2. The inner function is defined here, allowing it to access `startNumber`.
  function addOne() {
    // 3. This line accesses and modifies the parent's variable.
    //    Notice there is no `let` here.
    startNumber += 1;
    // 4. The inner function returns the updated value.
    return startNumber;
  }

  // 5. This is the correct way to call the nested function and
  //    use its returned value to update the HTML element.
  document.getElementById("nested-function").innerHTML = addOne();
}
