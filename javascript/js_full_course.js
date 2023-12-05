/* JavaScript Course - Full Course for Beginners (freeCodeCamp.org)
   url:https://www.youtube.com/watch?v=PkZNo7MFNFg (date_url: 12/04/2023) 
*/

/*
==> How to start:

To see your result you need to create a html file and link it to this file.
Next, you need to open the html file in your browser and open the console.
=> For MAC: cmd + option + i or right click and inspect

*/



// => Basic JavaScript: Comment Your JavaScript Code

// comment

/* 
multi-line 
comment */


// => Data Types

/* undefined, null, boolean, string, symbol, number, and object */


// => Basic JavaScript: Declare JavaScript Variables

var myName = "Beau"
myName = 8

//let ourName = "freeCodeCamp"

const pi = 3.14 // the difference between var and let is that var can be declared again and let can't be declared again


// => Basic JavaScript: Storing Values with the Assignment Operator

var a; // declaring a variable
var b = 2; // you end a statement with a semicolon
console.log(a) // undefined

a = 7; // assigning a variable
b = a; // assigning the contents of a to b

console.log(a) // 7
// Your JavaScript code goes here
console.log("Hello, World!");

c = "I am a";
c = c + " String!";
console.log(c) // I am a String!

// => Case Sensitivity in Variables

// Declarations
var studlyCapVar; // the first letter of the variable is lowercase and the rest is uppercase
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// => Basic JavaScript: Add Two Numbers with JavaScript

var sum = 10 + 10;
console.log(sum) // 20


// => Basic JavaScript: Subtract One Number from Another with JavaScript
var difference = 45 - 33;

// => Basic JavaScript: Multiply Two Numbers with JavaScript
var product = 8 * 10;

// => Basic JavaScript: Divide One Number by Another with JavaScript
var quotient = 66 / 33;

// => Basic JavaScript: Increment a Number with JavaScript
var myVar = 87;
myVar++; // the same as myVar = myVar + 1;

// => Basic JavaScript: Decrement a Number with JavaScript
var myVar = 11;
myVar--; // the same as myVar = myVar - 1;

// => Basic JavaScript: Create Decimal Numbers with JavaScript
var ourDecimal = 5.7;
var myDecimal = 0.009;

// => Basic JavaScript: Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5;
console.log(product) // 5

// => Basic JavaScript: Divide One Decimal by Another with JavaScript
var quotient = 4.4 / 2.0;

// => Basic JavaScript: Finding a Remainder in JavaScript
var remainder; // the remainder operator % gives the remainder of the division of two numbers
remainder = 11 % 3; // 11 / 3 = 3 and the remainder is 2
// often used to determine if a number is even or odd

// => Basic JavaScript: Compound Assignment With Augmented Addition
var a = 3;
var b = 17;
var c = 12;

a += 12; // the same as a = a + 12;
b += 9; // the same as b = b + 9;
c += 7; // the same as c = c + 7;

// => Basic JavaScript: Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a -= 6; // the same as a = a - 6;
b -= 15; // the same as b = b - 15;
c -= 1; // the same as c = c - 1;

// => Basic JavaScript: Compound Assignment With Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 5; // the same as a = a * 5;
b *= 3; // the same as b = b * 3;
c *= 10; // the same as c = c * 10;

// => Basic JavaScript: Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;

a /= 12; // the same as a = a / 12;
b /= 4; // the same as b = b / 4;
c /= 11; // the same as c = c / 11;

// => Declare String Variables
var myFirstName = "Beau";
var myLastName = "Carnes";

// => Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // the backslash \ is used to escape quotes
console.log(myStr) // I am a "double quoted" string inside "double quotes".

// => Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; // you can use single quotes to quote strings

// => Escape Sequences in Strings
/******
CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // \n is a newline, \t is a tab, \\ is a backslash
console.log(myStr) // FirstLine
                   //    \SecondLine
                   // ThirdLine
// => Concatenating Strings with Plus Operator
var ourStr = "I come first. " + "I come second."; // the + operator can be used to concatenate strings
console.log(ourStr) // I come first. I come second.

// => Concatenating Strings with the Plus Equals Operator
var ourStr = "I come first. ";
ourStr += "I come second."; // the += operator can be used to concatenate strings

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."; // the += operator can be used to concatenate strings
console.log(myStr) // This is the first sentence. This is the second sentence.

// => Constructing Strings with Variables
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?"; // you can use variables to concatenate strings

var myName = "Beau";
var myStr = "My name is " + myName + " and I am well!"; // you can use variables to concatenate strings
console.log(myStr) // My name is Beau and I am well!

// => Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective; // you can append variables to strings

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective; // you can append variables to strings

// => Find the Length of a String
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length; // the length of a string is the number of characters it has
console.log(firstNameLength) // 3

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length; // the length of a string is the number of characters it has

// => Use Bracket Notation to Find the First Character in a String
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0]; // you can use bracket notation to find the first character in a string
console.log(firstLetterOfFirstName) // A
// zero-based indexing: the first character in a string is at position 0

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // you can use bracket notation to find the first character in a string

// => Understand String Immutability
var myStr = "Jello World";
myStr[0] = "H"; // strings are immutable, they cannot be changed once created
console.log(myStr) // Jello World

// => Use Bracket Notation to Find the Nth Character in a String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // you can use bracket notation to find the nth character in a string
console.log(secondLetterOfFirstName) // d

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; // you can use bracket notation to find the nth character in a string

// => Use Bracket Notation to Find the Last Character in a String
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1]; // you can use bracket notation to find the last character in a string
console.log(lastLetterOfFirstName) // a

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1]; // you can use bracket notation to find the last character in a string

// => Use Bracket Notation to Find the Nth-to-Last Character in a String
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3]; // you can use bracket notation to find the nth-to-last character in a string
console.log(thirdToLastLetterOfFirstName) // A

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // you can use bracket notation to find the nth-to-last character in a string

// => Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { // you can use concatenation to build a string
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // you can use concatenation to build a string
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly")); // The big dog ran quickly
console.log(wordBlanks("bike", "slow", "flew", "slowly")); // The slow bike flew slowly

// => Store Multiple Values in one Variable using JavaScript Arrays
var ourArray = ["John", 23]; // arrays can store several pieces of data in one place
var myArray = ["Quincy", 1];

// => Nest one Array within Another Array
var ourArray = [["the universe", 42], ["everything", 101010]]; // you can nest arrays within other arrays
var myArray = [["Bulls", 23], ["White Sox", 45]];
var teamName = myArray[1][0]; // you can access data inside arrays using indexes
console.log(teamName); // "White Sox"

// => Access Array Data with Indexes
var ourArray = [50,60,70];
var ourData = ourArray[0]; // you can access data inside arrays using indexes
console.log(ourData) // 50

var myArray = [50,60,70];
var myData = myArray[0]; // you can access data inside arrays using indexes

// => Modify Array Data With Indexes
var ourArray = [18,64,99];
ourArray[1] = 45; // you can modify data inside arrays using indexes
console.log(ourArray) // [18, 45, 99]

var myArray = [18,64,99];
myArray[0] = 45; // you can modify data inside arrays using indexes

// => Access Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]; // you can access data inside arrays using indexes
var myData = myArray[2][1]; // you can access data inside arrays using indexes
console.log(myData) // 8

// => Manipulate Arrays With push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); // you can add data to the end of an array using push()
console.log(ourArray) // ["Stimpson", "J", "cat", ["happy", "joy"]]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // you can add data to the end of an array using push()

// => Manipulate Arrays With pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); // you can remove data from the end of an array using pop()
console.log(ourArray) // [1, 2]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); // you can remove data from the end of an array using pop()

// => Manipulate Arrays With shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // you can remove data from the beginning of an array using shift()
console.log(ourArray) // ["J", ["cat"]]

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); // you can remove data from the beginning of an array using shift()

// => Manipulate Arrays With unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // you can add data to the beginning of an array using unshift()
ourArray.unshift("Happy");
console.log(ourArray) // ["Happy", "J", "cat"]

var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // you can add data to the beginning of an array using unshift()
myArray.unshift(["Paul", 35]);

// => Shopping List
var myList = [["Chocolate Bar", 15], ["Milk", 2], ["Bread", 1], ["Eggs", 12], ["Butter", 1]];

// => Write Reusable JavaScript with Functions
function ourReusableFunction() { // you can create a function to reuse code
  console.log("Heyya, World");
}   
ourReusableFunction(); // Heyya, World


function reusableFunction() { // you can create a function to reuse code
  console.log("Hi World");
}
reusableFunction(); // Hi World


// => Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) { // you can pass arguments to functions
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // 5

function functionWithArgs(a, b) { // you can pass arguments to functions
  console.log(a + b);
}
functionWithArgs(10, 5); // 15

// => Global Scope and Functions
var myGlobal = 10; // variables defined outside of a function block have global scope
function fun1() {
  oopsGlobal = 5; // variables defined without the var keyword are automatically created in the global scope
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") { // you can use typeof to check the type of a variable
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") { // you can use typeof to check the type of a variable
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output)
}
fun1();
fun2(); // myGlobal: 10 oopsGlobal: 5

// => Local Scope and Functions
// "00:59:31"
