// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//Traditional anonymous function
(function (a) {
  return a + 100;
});

//1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {return a + 100};

//2. Remove the body braces and word "return" - the return is implied
(a) => a + 100;

//3. Remove the parameter parentheses
a => a + 100;

//Traditional anonymous function Ex 2
(function (a,b){
  return a + b + 100;
});

//Arrow Function
(a,b) => a + b + 100;

//Traditional anonymous function (no parameters)
(function() {
  return a + b + 100;
});

//Anonymous arrow funciton (no parameters)
() => a + b + 100

//Traditional anonymous function
(function (a,b) {
  const chuck = 42; //Scoped, only available in this function
  return a + b + chuck;
})

//Arrow function
((a,b) => {
  const chuck2 = 42; //Scoped here as well
  return a + b + chuck2;
});

//Traditional function
function bob(a){
  return a + 100;
}

//Arrow function
const bob2 = (a) => a + 100;

//Consice body, return is implied.
const func = (x) => x * x;

//Block body, needs return
const func2 = (x,y) => {
  return x * y;
}
