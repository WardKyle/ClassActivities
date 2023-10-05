// Question 5:
// Write a function that determines if a string is a palindrome.

// A palindrome is a string that is the same forward and backwards.

// Examples:
// isPalindrome('racecar') // --> true
// isPalindrome('table') // --> false

// 1.) Gather requirements
// 	Contents of the string. Capitalization? Characters? Numbers?
// 	must be greater than 2?
// 	spaces included?
// 2.) Break down problem
// 	String could be any length
// 	Could be even/odd
// 	Could get any random capitalization in our strings
// 	Priorities / steps:
// 		Compare beginning and end letters. Start outwards and move inwards.
// 		If the condition passes then we keep moving inwards.
// 3.) Write pseudocode
// 	Loop through the string
// 	Compare first value to end value
// 	If passes / true then keep moving inward on the string
// 	Odd/Even: String will either end with 1 remaining letter and still pass
// 		OR all letters have been checked with none remaining and still pass.
// 4.) Code a solution

function isPalindrome(param) {
  param = param.toLowerCase();
  if (param.length == 1) {
    return false;
  }
  while (param.length >= 1) {
    let firstLetter = param[0];
    let lastLetter = param[param.length - 1];
    if (firstLetter == lastLetter) {
      param = param.slice(1, param.length - 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(`isPalindrome: ${isPalindrome("racecar")}`);

// 5.) Test the solution. Tested!
// 6.) Consider changes
// 	Doesn't handle any characters / numbers / spaces
// 	A single length string returns true. Was it supposed to?

// WORKING THROUGH THE SOLUTIONS TO THE OTHER ANSWERS:

// Question 1
// Write a JavaScript function that takes in two integers and returns their sum, unless the two integers are equal. If the two integers are equal, then return three times their sum.

// Examples:

// sum2Integers(10, 20) // --> 30
// sum2Integers(10, 10) // --> 60

function sum2Integers(a, b) {
  let sum;
  a === b ? (sum = a * 6) : (sum = a + b);
  return sum;
}

console.log(`sum2Integers: ${sum2Integers(10, 10)}`);

// Question 2
// Write a JavaScript function that takes in integers and returns the integer with the highest value.

// (Do NOT use Math.max()!!!)

// Examples:
// findHighest(5, 8, 1) // --> 8
// findHighest([4, 1, -3]) // --> 4

function findHighest(...param) {
  let biggest;
  let checkArr = arr => {
    biggest = arr[0];
    arr.forEach(el => {
      if (biggest < el) {
        biggest = el;
      }
    });
  };

  Array.isArray(param[0]) ? checkArr(param[0]) : checkArr(param);
  return biggest;
}

console.log(`findHighest: ${findHighest(5, 8, 1)}`);

// Question 3
// Write a function that generates a random number between 0-10. If the number is greater than 5, log “{number} is greater than five!”. If it is less than 5, log “{number} is less than five!”

let randomNumber = () => Math.floor(Math.random() * 11);
function checkNumber(param) {
  if (param < 5) {
    return `${param} is less than 5!`;
  }
  if (param > 5) {
    return `${param} is greater than 5!`;
  }
  return `${param} is equal to 5!`;
}

console.log(checkNumber(randomNumber()));

// Write a function that counts the number of vowels in a string. The vowels are "a", "e", "i", "o" & "u"

// Examples:

// findVowels('hello') // --> 2
// findVowels('why') // --> 0

function findVowels(param) {
  let vowels = ["a", "e", "i", "o", "u"];
  let isVowel = 0;
  param.split("").forEach(el => {
    if (vowels.includes(el)) {
      isVowel++;
    }
  });
  return isVowel;
}

console.log(`findVowels: ${findVowels("hello")}`);
