// The JavaScript statement document.write("Hello, world!"); utilizes the document.write() method to dynamically insert content into an HTML document.
document.write("Hello, world!");

// defines a constant variable A
const A = "This is a string";

// write value A to the document
document.write(A);

// a method that displays a modal dialog box to the user with a specified message and an "OK" button
window.alert(A);

// JavaScript statement using backslash (\) to escape the double quotes inside the string
document.write('Lisa told Bart, "Knock it off, Bart! Or I\'ll tell dad!"');

// JavaScript statement using string concatenation with the + operator
document.write(
  '"Be who you are and say what you feel,' +
    " because those who mind don't matter and those who matter don't mind.\"" +
    "-Dr. Seuss"
);

/*  let B: Declares a variable that uses string concatenation with the + operator. The let keyword is used to declare variables with block scope. This means they only exist within the code block in which they are defined.  */
let B = "Concatenated" + " String";
// writes a string of text defined in the variable B to the document
document.write(B);

// code declares five variables and then writes the value of one of them to the web page.
let Family = "The Arezzinis",
  Dad = "Jeremiah",
  Mom = "Hermoine",
  Daughter = "Penny",
  Son = "Zorro";
document.write(Dad);

/* a simple arithmetic operation that evaluates to the number 6. The + symbol acts as the mathematical addition operator when both operands are numbers. Both operands are numeric, so JavaScript performs mathematical addition instead of concatenation.  */
3 + 3;

// declares a variable with the first part of the string
let Sent1 = "This is the beginning of the string";

// declares a variable with the second part of the string
let Sent2 = " and this is the end of the string";

/* combines the Sent1 and Sent2 variables into a new variable called result. The .concat() method is used to join the two strings together. */
let result = Sent1.concat(Sent2);

// writes the concatenated string of text defined in the variable result to the document
document.write(result);
