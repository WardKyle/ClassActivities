/* eslint-disable prettier/prettier */
// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1",
};

// what will the following lines print?
console.log(obj[key]); //the key is 1
console.log(obj.key); //the key is key
console.log(obj["key"]); //the key is key

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.

let newObj = {
    first: "Kyle",
    isNum: 1,
    hasPets: true,
    collection: ["Songs","Books","Coins"]
};
// Access a value in the "collection" property
console.log(newObj.collection[1]);

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
newObj.method2 = function() {
  return "the key is 'method' and it calls refers to a function";
};

let returned = newObj.method2();
console.log("returned", returned);
console.log(newObj);
// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Star Wars",
  number: 5,
  color: "Blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
console.log(obj);
// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print? 5
// what do you expect to see on each line?

// ["key", "1", "method", "favorites", "list"]
// Key is key and the value is:

for (let key of keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
for (let item in obj.favorites){
    console.log(`favorite ${item}: ${obj.favorites[item]}`);
}

// Access the values "b", 4, and 6 from obj.list

console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);