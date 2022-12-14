/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("\nEXERCISE 1");
function area(x, y) {
  area = x * y;
  //   return area;
}
area(2, 3);
console.log(area);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their 
 sum multiplied by 3.
*/
console.log("\nEXERCISE 2");
function crazySum(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}
console.log(crazySum(8, 8));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("\nEXERCISE 3");
function crazyDiff(givenNumber) {
  if (givenNumber > 19) {
    return (givenNumber - 19) * 3;
  } else {
    return givenNumber - 19;
  }
}
console.log(crazyDiff(68));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 
 20 and 100 (included) or if n it's equal to 400.
*/
console.log("\nEXERCISE 4");
function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(100));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with 
 "Strive", then it should just return the original string.
*/
console.log("\nEXERCISE 5");
function strivify(string) {
  if (string.startsWith("Strive")) {
    return string;
  } else {
    return "Strive" + string;
  }
}
console.log(strivify("School"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a 
 multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log("\nEXERCISE 6");
function check3and7(positiveNumber) {
  if (positiveNumber % 3 === 0 && positiveNumber % 7 === 0) {
    return "Its a multiple of 3 & 7";
  } else if (positiveNumber % 3 === 0) {
    return "Its a multiple of 3";
  } else if (positiveNumber % 7 === 0) {
    return "Its a multiple of 7";
  } else {
    return "Its NOT a multiple of 3 or 7";
  }
}
console.log(check3and7(26));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string 
 (es.: Strive => evirtS).
*/
console.log("\nEXERCISE 7");
function reverseString(string) {
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("Hello"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string 
 passed as a parameter.
*/
console.log("\nEXERCISE 8");
function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperFirst("epiCode"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a 
 given string passed as a parameter.
*/
console.log("\nEXERCISE 9");
function cutString(string) {
  var cuttedString = string.slice(1, string.length - 1);
  return cuttedString;
}
console.log(cutString("Alexander"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random 
 numbers between 0 and 10.
*/
console.log("\nEXERCISE 10");
function giveMeRandom(n) {
  let array = [];
  for (var i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}
console.log("Your numbers are: ", giveMeRandom(10));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the 
 Homework section of today's Eduflow.
*/
