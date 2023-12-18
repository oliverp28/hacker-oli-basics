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
function myLocalScope() { // variables defined inside a function have local scope
  var myVar = 5;
  console.log(myVar);
}
myLocalScope(); // 5
console.log(myVar); // myVar is not defined

// => Global vs. Local Scope in Functions
var outerWear = "T-Shirt"; // variables defined outside of a function have global scope
function myOutfit() {
  var outerWear = "sweater"; // variables defined inside a function have local scope
  return outerWear;
}
console.log(myOutfit()); // sweater
console.log(outerWear); // T-Shirt

// => Return a Value from a Function with Return
function minusSeven(num) {
  return num - 7; // you can return a value from a function with the return keyword
}
console.log(minusSeven(10)); // 3

function timesFive(num) {
  return num * 5; // you can return a value from a function with the return keyword
}
console.log(timesFive(5)); // 25

// => Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
  sum = sum + 3; // functions without a return statement return undefined
}
function addFive() {
  sum += 5; // functions without a return statement return undefined
}
console.log(addThree()); // undefined
console.log(addFive()); // undefined

// => Assignment with a Returned Value
var changed = 0;
function change(num) {
  return (num + 5) / 3; // you can assign a returned value to a variable
}
changed = change(10);
console.log(changed) // 5

var processed = 0;
function processArg(num) {
  return (num + 3) / 5; // you can assign a returned value to a variable
}
processed = processArg(7);
console.log(processed) // 2

// => Stand in Line
function nextInLine(arr, item) { // you can add an item at the end of an array and remove the first item of an array
  arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]

// => Understanding Boolean Values
function welcomeToBooleans() {
  return true; // boolean values are true and false
}

// => Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) { // you can use if statements to make decisions in code
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(true)); // Yes, that was true
console.log(trueOrFalse(false)); // No, that was false

// => Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { // the equality operator == compares two values and returns true if they're equivalent or false if they're not
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10)); // Not Equal
console.log(testEqual(12)); // Equal
console.log(testEqual("12")); // Equal

// => Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) { // the strict equality operator === compares two values and returns true if they're equivalent or false if they're not
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(10)); // Not Equal
console.log(testStrict(7)); // Equal
console.log(testStrict("7")); // Not Equal

// => Practice comparing different values
function compareEquality(a, b) {
  if (a === b) { // the strict equality operator === compares two values and returns true if they're equivalent or false if they're not
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10")); // Not Equal
console.log(compareEquality("20", 20)); // Not Equal
console.log(compareEquality(20, 20)); // Equal

// => Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) { // the inequality operator != compares two values and returns true if they're not equivalent or false if they are
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10)); // Not Equal
console.log(testNotEqual(99)); // Equal
console.log(testNotEqual("99")); // Equal

// => Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) { // the strict inequality operator !== compares two values and returns true if they're not equivalent or false if they are
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(10)); // Not Equal
console.log(testStrictNotEqual(17)); // Equal
console.log(testStrictNotEqual("17")); // Not Equal

// => Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) { // the greater than operator > compares two values and returns true if the first one is greater than the second one or false if not
    return "Over 100";
  }
  if (val > 10) { // the greater than operator > compares two values and returns true if the first one is greater than the second one or false if not
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10)); // 10 or Under
console.log(testGreaterThan(11)); // Over 10
console.log(testGreaterThan(99)); // Over 10
console.log(testGreaterThan(100)); // Over 100
console.log(testGreaterThan(101)); // Over 100

// => Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) { // the greater than or equal to operator >= compares two values and returns true if the first one is greater than or equal to the second one or false if not
    return "20 or Over";
  }
  if (val >= 10) { // the greater than or equal to operator >= compares two values and returns true if the first one is greater than or equal to the second one or false if not
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(10)); // 10 or Over
console.log(testGreaterOrEqual(11)); // 10 or Over
console.log(testGreaterOrEqual(19)); // 10 or Over
console.log(testGreaterOrEqual(20)); // 20 or Over
console.log(testGreaterOrEqual(21)); // 20 or Over

// => Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) { // the less than operator < compares two values and returns true if the first one is less than the second one or false if not
    return "Under 25";
  }
  if (val < 55) { // the less than operator < compares two values and returns true if the first one is less than the second one or false if not
    return "Under 55";
  }
  return "55 or Over";
}
console.log(testLessThan(10)); // Under 25
console.log(testLessThan(25)); // Under 25
console.log(testLessThan(54)); // Under 55
console.log(testLessThan(55)); // 55 or Over
console.log(testLessThan(99)); // 55 or Over

// => Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) { // the less than or equal to operator <= compares two values and returns true if the first one is less than or equal to the second one or false if not
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) { // the less than or equal to operator <= compares two values and returns true if the first one is less than or equal to the second one or false if not
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
console.log(testLessOrEqual(10)); // Smaller Than or Equal to 12
console.log(testLessOrEqual(11)); // Smaller Than or Equal to 12
console.log(testLessOrEqual(12)); // Smaller Than or Equal to 12
console.log(testLessOrEqual(23)); // Smaller Than or Equal to 24
console.log(testLessOrEqual(24)); // Smaller Than or Equal to 24
console.log(testLessOrEqual(25)); // More Than 24

// => Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) { // the logical and operator && returns true if both operands are true or false otherwise
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10)); // No
console.log(testLogicalAnd(25)); // Yes
console.log(testLogicalAnd(50)); // Yes
console.log(testLogicalAnd(51)); // No
console.log(testLogicalAnd(75)); // No

// => Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) { // the logical or operator || returns true if one of the operands is true or false otherwise
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(0)); // Outside
console.log(testLogicalOr(9)); // Outside
console.log(testLogicalOr(10)); // Inside
console.log(testLogicalOr(15)); // Inside
console.log(testLogicalOr(19)); // Inside

// => Introducing Else Statements
function testElse(val) {
  var result = "";
  if (val > 5) { // you can use else statements to execute code when a condition is false
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(4)); // 5 or Smaller
console.log(testElse(5)); // 5 or Smaller
console.log(testElse(6)); // Bigger than 5
console.log(testElse(10)); // Bigger than 5

// => Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) { // you can use else if statements to execute code when multiple conditions are true
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(0)); // Smaller than 5
console.log(testElseIf(5)); // Between 5 and 10
console.log(testElseIf(7)); // Between 5 and 10
console.log(testElseIf(10)); // Between 5 and 10
console.log(testElseIf(12)); // Greater than 10

// => Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) { // you can use if else statements to execute code when multiple conditions are true
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(4)); // Less than 5
console.log(orderMyLogic(6)); // Less than 10
console.log(orderMyLogic(11)); // Greater than or equal to 10

// => Chaining If Else Statements
function testSize(num) {
  if (num < 5) { // you can chain if else statements to execute code when multiple conditions are true
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(0)); // Tiny
console.log(testSize(4)); // Tiny
console.log(testSize(5)); // Small
console.log(testSize(8)); // Small
console.log(testSize(10)); // Medium
console.log(testSize(14)); // Medium
console.log(testSize(15)); // Large
console.log(testSize(17)); // Large
console.log(testSize(20)); // Huge
console.log(testSize(25)); // Huge

// => Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; // you can chain if else statements to execute code when multiple conditions are true
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}
console.log(golfScore(4, 1)); // Hole-in-one!
console.log(golfScore(4, 2)); // Eagle
console.log(golfScore(5, 2)); // Eagle
console.log(golfScore(4, 3)); // Birdie
console.log(golfScore(4, 4)); // Par
console.log(golfScore(1, 1)); // Hole-in-one!
console.log(golfScore(5, 5)); // Par
console.log(golfScore(4, 5)); // Bogey
console.log(golfScore(4, 6)); // Double Bogey
console.log(golfScore(4, 7)); // Go Home!
console.log(golfScore(5, 9)); // Go Home!

// => Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = ""; // you can use switch statements to select from many options based on a value
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(1)); // alpha
console.log(caseInSwitch(2)); // beta
console.log(caseInSwitch(3)); // gamma
console.log(caseInSwitch(4)); // delta

// => Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = ""; // you can use switch statements to select from many options based on a value
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default: // you can add a default statement to execute if no matching case statements are found
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("a")); // apple
console.log(switchOfStuff("b")); // bird
console.log(switchOfStuff("c")); // cat
console.log(switchOfStuff("d")); // stuff

// => Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = ""; // you can use switch statements to select from many options based on a value
  switch(val) {
    case 1:
    case 2:
    case 3: // you can use multiple identical options in switch statements
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6: // you can use multiple identical options in switch statements
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9: // you can use multiple identical options in switch statements
      answer = "High";
      break;
  }
  return answer;
}
console.log(sequentialSizes(1)); // Low
console.log(sequentialSizes(2)); // Low
console.log(sequentialSizes(3)); // Low
console.log(sequentialSizes(4)); // Mid
console.log(sequentialSizes(5)); // Mid
console.log(sequentialSizes(6)); // Mid
console.log(sequentialSizes(7)); // High
console.log(sequentialSizes(8)); // High
console.log(sequentialSizes(9)); // High

// => Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = ""; // you can use switch statements to select from many options based on a value
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch("bob")); // Marley
console.log(chainToSwitch(42)); // The Answer
console.log(chainToSwitch(1)); // There is no #1
console.log(chainToSwitch(99)); // Missed me by this much!
console.log(chainToSwitch(7)); // Ate Nine

// => Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b; // you can return boolean values from functions
}
console.log(isLess(10, 15)); // true
console.log(isLess(15, 10)); // false

// => Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) { // you can return early from a function
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2)); // 8
console.log(abTest(-2,2)); // undefined
console.log(abTest(2,-2)); // undefined
console.log(abTest(2,8)); // 18
console.log(abTest(3,3)); // 12

// => Counting Cards
var count = 0; // you can use switch statements to select from many options based on a value
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4: // you can use multiple identical options in switch statements
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q": // you can use multiple identical options in switch statements
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) { // you can return early from a function
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}
console.log(cc(2)); // 1 Bet
console.log(cc(3)); // 2 Bet
console.log(cc(7)); // 2 Bet
console.log(cc('K')); // 1 Bet
console.log(cc('A')); // 0 Hold
console.log(cc(10)); // -1 Hold
console.log(cc('J')); // -2 Hold
console.log(cc('Q')); // -3 Hold
console.log(cc('K')); // -4 Hold
console.log(cc('A')); // -5 Hold

// => Build JavaScript Objects
var myDog = { // you can build javascript objects
  "name": "Quincy",
  "legs": 3,
  "tails": 2,
  "friends": []
};
console.log(myDog) // { name: 'Quincy', legs: 3, tails: 2, friends: [] }

// => Accessing Object Properties with Dot Notation
var testObj = { // you can access object properties with dot notation
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat; // you can access object properties with dot notation
var shirtValue = testObj.shirt; // you can access object properties with dot notation
console.log(hatValue) // ballcap
console.log(shirtValue) // jersey

// => Accessing Object Properties with Bracket Notation
var testObj = { // you can access object properties with bracket notation
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"]; // you can access object properties with bracket notation
var drinkValue = testObj["the drink"]; // you can access object properties with bracket notation
console.log(entreeValue) // hamburger
console.log(drinkValue) // water

// => Accessing Object Properties with Variables
var testObj = { // you can access object properties with variables
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16; // you can access object properties with variables
var player = testObj[playerNumber]; // you can access object properties with variables
console.log(player) // Montana

// => Updating Object Properties
var ourDog = { // you can update object properties
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper"; // you can update object properties

var myDog = { // you can update object properties
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder"; // you can update object properties

// => Add New Properties to a JavaScript Object
var ourDog = { // you can add new properties to an object
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow"; // you can add new properties to an object

var myDog = { // you can add new properties to an object
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"; // you can add new properties to an object

// => Delete Properties from a JavaScript Object
var ourDog = { // you can delete properties from an object
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark; // you can delete properties from an object

var myDog = { // you can delete properties from an object
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails; // you can delete properties from an object

// => Using Objects for Lookups
function phoneticLookup(val) { // you can use objects for lookups
  var result = "";
  var lookup = { // you can use objects for lookups
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val]; // you can use objects for lookups
  return result;
}
console.log(phoneticLookup("charlie")); // Chicago
console.log(phoneticLookup("bravo")); // Boston
console.log(phoneticLookup("delta")); // Denver
console.log(phoneticLookup("echo")); // Easy
console.log(phoneticLookup("foxtrot")); // Frank

// => Testing Objects for Properties
var myObj = { // you can test objects for properties
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) { // you can test objects for properties
  if (myObj.hasOwnProperty(checkProp)) { // you can test objects for properties
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj("gift")); // pony
console.log(checkObj("pet")); // kitten
console.log(checkObj("house")); // Not Found

// => Manipulating Complex Objects
var myMusic = [ // you can manipulate complex objects
    {"title": "Happy Birthday", 
    "artist": "Pablo Picasso", 
    "release_year": 1992, 
    "formats": ["CD", "8T", "LP"], 
    "gold": true},

    {"title": "The Beatles", // new objects can be added at any time
    "artist": "The Beatles", 
    "release_year": 1968, 
    "formats": ["CD", "8T", "LP"], 
    "gold": true}
  ];

// => Accessing Nested Objects
var myStorage = { // you can access nested objects
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // you can access nested objects
console.log(gloveBoxContents) // maps

// => Accessing Nested Arrays
var myPlants = [ // you can access nested arrays
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1]; // you can access nested arrays
console.log(secondTree) // pine

// => Record Collection
var collection = { // you can manipulate complex objects
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(2468, "tracks", "Free"));
console.log(updateRecords(2548, "tracks", ""));
console.log(updateRecords(1245, "album", "Riptide"));

// => Iterate with JavaScript While Loops
var myArray = []; // you can iterate with while loops
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray) // [ 0, 1, 2, 3, 4 ]

// => Iterate with JavaScript For Loops
var myArray = []; // you can iterate with for loops
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
console.log(myArray) // [ 1, 2, 3, 4, 5 ]

// => Iterate Odd Numbers With a For Loop
var myArray = []; // you can iterate odd numbers with for loops
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray) // [ 1, 3, 5, 7, 9 ]

// => Count Backwards With a For Loop
var myArray = []; // you can count backwards with for loops
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray) // [ 9, 7, 5, 3, 1 ]

// => Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6]; // you can iterate through an array with for loops
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total) // 20

// => Nesting For Loops
function multiplyAll(arr) { // you can nest for loops
  var product = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product) // 5040

// => Iterate with JavaScript Do...While Loops
var myArray = []; // you can iterate with do while loops
var i = 10;
do {
  myArray.push(i);
  i++;
}
while (i < 5)
console.log(i, myArray) // 10 []

// => Replace Loops using Recursion
function sum(arr, n) { // you can replace loops using recursion
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([1], 0)); // 0
console.log(sum([2, 3, 4], 1)); // 2
console.log(sum([2, 3, 4, 5], 3)); // 9

// => Profile Lookup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"] 
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"] 
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin", "Dr. Watson"] 
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"] 
  }
];

function lookUpProfile(name, prop){ 
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) { 
      if (contacts[i].hasOwnProperty(prop)) { 
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact"; 
}
console.log(lookUpProfile("Akira", "likes")); // [ 'Pizza', 'Coding', 'Brownie Points' ]
console.log(lookUpProfile("Harry", "likes")); // [ 'Hogwarts', 'Magic', 'Hagrid' ]
console.log(lookUpProfile("Sherlock", "likes")); // [ 'Intriguing Cases', 'Violin', 'Dr. Watson' ]
console.log(lookUpProfile("Kristian", "lastName")); // Vos
console.log(lookUpProfile("Sherlock", "lastName")); // Holmes
console.log(lookUpProfile("Harry", "likes")); // [ 'Hogwarts', 'Magic', 'Hagrid' ]
console.log(lookUpProfile("Bob", "number")); // No such contact
console.log(lookUpProfile("Bob", "potato")); // No such contact
console.log(lookUpProfile("Akira", "address")); // No such property

// => Generate Random Fractions with JavaScript
function randomFraction() { 
  return Math.random(); 
}
console.log(randomFraction())

// => Generate Random Whole Numbers with JavaScript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); 
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum())

// => Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) { 
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}
var myRandom = randomRange(5, 15);
console.log(myRandom) 

// => Use the parseInt Function
function convertToInteger(str) { // you can convert strings to integers
  return parseInt(str);
}
console.log(convertToInteger("56")); // 56
console.log(convertToInteger("77")); // 77
console.log(convertToInteger("JamesBond")); // NaN -> Not a Number

// => Use the parseInt Function with a Radix
function convertToInteger(str) { 
  return parseInt(str, 2);
}
console.log(convertToInteger("10011")); // 19
console.log(convertToInteger("111001")); // 57
console.log(convertToInteger("JamesBond")); // NaN -> Not a Number

// => Use the Conditional (Ternary) Operator
function checkEqual(a, b) { // you can use the conditional (ternary) operator
  return a === b ? true : false;
}
console.log(checkEqual(1, 2)); // false
console.log(checkEqual(1, 1)); // true
console.log(checkEqual(1, -1)); // false

// => Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10)); // positive
console.log(checkSign(-12)); // negative
console.log(checkSign(0)); // zero

// difference between var and let
var camper = 'James';
var camper = 'David';
console.log(camper); // David
let camper = 'James';
let camper = 'David';
console.log(camper); // SyntaxError: Identifier 'camper' has already been declared

// => Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) { // you can declare read-only variables with the const keyword
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp"); // freeCodeCamp is cool!

// => Mutate an Array Declared with const
const s = [5, 7, 2]; // you can mutate an array declared with const
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s) // [ 2, 5, 7 ]

// => Prevent Object Mutation
function freezeObj() { // you can prevent object mutation
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI) // 3.14

// => Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date(); // you can use arrow functions to write concise anonymous functions
console.log(magic()) // 2020-12-09T17:08:46.608Z

// => Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2); // you can write arrow functions with parameters
console.log(myConcat([1, 2], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]

// => Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value; // you can set default parameters for your functions
console.log(increment(5, 2)); // 7
console.log(increment(5)); // 6

// => Use the Rest Parameter with Function Parameters
const sum = (...args) => { // you can use the rest parameter with function parameters
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10

// => Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']; // you can use the spread operator to evaluate arrays in-place
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = 'potato'
})();
console.log(arr2) // [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]
console.log(arr1) // [ 'potato', 'FEB', 'MAR', 'APR', 'MAY' ]

// => Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = { // you can use destructuring assignment to extract values from objects
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today) // 77
console.log(tomorrow) // 80

// => Create Strings using Template Literals
const person = { // you can create strings using template literals
  name: "Zodiac Hasbro",
  age: 56
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting) // Hello, my name is Zodiac Hasbro! I am 56 years old.

// => Write Concise Object Literal Declarations Using Object Property Simple Fields
const createPerson = (name, age, gender) => { // you can write concise object literal declarations using object property simple fields

  return {
    name: name,
    age: age,
    gender: gender,
  };

};
console.log(createPerson("Zodiac Hasbro", "56", "male"));

// => Write Concise Declarative Functions
const bicycle = { // you can write concise declarative functions
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear) // 3

// => Use class Syntax to Define a Constructor Function
class SpaceShuttle { // you can use class syntax to define a constructor function
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet) // Jupiter

// => Use getters and setters to Control Access to an Object
function makeClass() { // you can use getters and setters to control access to an object
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp) // 26

// => Understand the Differences Between import and require
import { capitalizeString } from "./string_functions" // you can understand the differences between import and require
const cap = capitalizeString("hello!");
console.log(cap) // Hello!

// => Use export to Reuse a Code Block
const capitalizeString = (string) => { // you can use export to reuse a code block
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } // you can use export to reuse a code block
export const foo = "bar";
export const bar = "foo";

// => Use * to Import Everything from a File
import * as capitalizeStrings from "capitalize_strings"; // you can use * to import everything from a file

// => Create an Export Fallback with export default
export default function subtract(x,y) {return x - y;} // you can create an export fallback with export default

// => Import a Default Export
import subtract from "math_functions"; // you can import a default export
subtract(7,4);

// => Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => { // you can create a javascript promise
});

// => Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => { // you can complete a promise with resolve and reject
  let responseFromServer = true;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// => Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => { // you can handle a fulfilled promise with then
  let responseFromServer = true;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

// => Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => { // you can handle a rejected promise with catch
  let responseFromServer = false;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});

// --------- ENDE ---------









