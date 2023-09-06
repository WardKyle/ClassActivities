// TODO: using the function expressions below, refactor them into function declarations
// const greet = function() {
//   console.log("Hello!");
// };

// const threeModTwo = function() {
//   console.log(3 % 2);
// };

// let age = 18;
// const checkDrivingAge = function() {
//   if (age >= 16) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

//First
function greet(){
  console.log(`Hello`);
}

//Second
function threeModTwo(){
  console.log(3 % 2);
}

//Third
function checkDrivingAge(age){
  if(age >=16){
    console.log(true);
  }
  else {
    console.log(false);
  }

  // Ternary Operators Practice
   age >= 16?console.log(true):console.log(false);
}
greet();
threeModTwo();
checkDrivingAge(15);
