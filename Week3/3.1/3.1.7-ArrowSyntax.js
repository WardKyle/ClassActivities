// refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
let myNumberFunction2 = () => ((2 ** 2 + 3) % 4) * 14;
console.log(myNumberFunction2());

//Next
function greet(name) {
  return `Hello, ${name}`;
}
let greet2 = name => `Hello, ${name}`;
console.log(greet2("Kyle"));

//Next
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
let timeOfDayGreet2 = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;
console.log(timeOfDayGreet2("Kyle", "morning"));

//Next
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
let tripleAndHalf2 = num => {
  let triple = num * 3;
  return triple / 2;
};
console.log(tripleAndHalf2(5));

//Next
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
let sumTwoNumbers2 = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers it ${sum}.`);
  return sum;
};
sumTwoNumbers2(9, 35);
